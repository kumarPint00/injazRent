"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
// import "../car_models/ModelsDataTable.css";
import "../../../car_models/ModelsDataTable.css";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { serverUrl } from "@/utils/helper";
import PublishIcon from "@mui/icons-material/Publish";
import EnquiryModelComponent from "../../EnquiryModelComponent";
import DeleteEnquiry from "../../DeleteEnquiry";

interface Data {
  carName: string;
  startDate: string;
  endDate: string;
  pickUpLoc: string;
  dropLocation: string;
  phoneNumber: string;
  area: string;
  email: string;
  bookingCreated: string;
  bookingUpdated: string;
  message: string;
  name: string;
  rejectedBy: string;
  action: string;
}

function createData(
  carName: string,
  startDate: string,
  endDate: string,
  pickUpLoc: string,
  dropLocation: string,
  phoneNumber: string,
  area: string,
  email: string,
  bookingCreated: string,
  bookingUpdated: string,
  message: string,
  name: string,
  rejectedBy: string,
  action: string
): Data {
  return {
    carName,
    startDate,
    endDate,
    pickUpLoc,
    dropLocation,
    phoneNumber,
    area,
    email,
    bookingCreated,
    bookingUpdated,
    message,
    name,
    rejectedBy,
    action,
  };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "carName",
    numeric: false,
    disablePadding: false,
    label: "Car",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "phoneNumber",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "startDate",
    numeric: false,
    disablePadding: false,
    label: "From",
  },
  {
    id: "endDate",
    numeric: false,
    disablePadding: false,
    label: "To",
  },
  {
    id: "bookingCreated",
    numeric: false,
    disablePadding: true,
    label: "Enquiry Date",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ fontWeight: "700" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const serverAPI = "https://api.injazrent.ae";
const localAPI = "http://localhost:4000";

export default function RejectedEnquiryDataTable() {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("carName");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [searched, setSearched] = React.useState<string>("");

  const [Rows, setrows] = useState([]);

  const [open, setOpen] = React.useState<boolean>(false);
  const [singleData, setSingleData] = useState({});
  
    const openModal = (row: any) => {
      setSingleData(row);
      setOpen(true);
    };

  useEffect(() => {
    axios
      .get(serverUrl + "/user/getInquirys")
      .then((res) => {
        console.log(res.data.data, "dataaaaaaaaaaaaaaaaaaaaa");
        // Reverse the order of the data before setting it
        const reversedData = res.data.data.reverse();
        const acceptedEnquiry = reversedData?.filter((item: any) => item.status === "rejected");
        setrows(acceptedEnquiry);
        setRows(acceptedEnquiry);
        console.log(acceptedEnquiry, "/user/getInquirys");
      })
      .catch((err) => {
        console.log("ddddddddddddd");
      });
  }, []);

  const exportToExcel = () => {
    const dataForExcel = Rows.map((row: any) => [
      row.bookingCreated ? row.bookingCreated : row.startDate,
      row.bookingId ? row.bookingId : "NA",
      row._id,
      row.carName ? row.carName : row.brand + " " + row.model,
      row.startDate,
      row.endDate,
      row.pickUpLoc,
      row.dropLocation,
      row.name,
      row.phoneNumber,
      row.email,
      row.message,
      row.status ? row.status : "NA",
      row.statusChangedBy ? row.statusChangedBy : "NA",
      row.statusMessage ? row.statusMessage : "NA",
    ]);

    const ws = XLSX.utils.aoa_to_sheet([
      [
        "Booking Date",
        "Booking ID",
        "Booking ID",
        "Car",
        "From",
        "To",
        "Pickup Location",
        "Drop Location",
        "Name",
        "Phone Number",
        "Email",
        "Message",
        "Status",
        "Status Changed By",
        "Status Message",
      ],
      ...dataForExcel,
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Car Enquiries");
    XLSX.writeFile(wb, "rejected_enquiries.xlsx");
  };

  const requestSearch = (searchedVal: any) => {
    setSearched(searchedVal);
    const filteredRows = rows.filter((row1: any) => {
      debugger;
      return (
        row1.carName?.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row1.packages?.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row1.bookingCreated?.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setrows(filteredRows);
    const b = Rows;
  };

  const cancelSearch = () => {
    const a = Rows;
    debugger;
    setSearched("");
    setrows(rows);
    requestSearch(searched);
  };
  const router = useRouter();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = Rows.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(Rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, searched, Rows, selected]
  );

  //Define a function to handle the update when a row is clicked
  //   const handleRowClick = async (event: any, row: any) => {
  //     event.stopPropagation(); // Prevent the click event from propagating to the parent elements

  //     try {
  //       const updateData = {
  //         carName: row.carName,
  //         startDate: row.startDate,
  //         endDate: row.endDate,
  //         pickUpLoc: row.pickUpLoc,
  //         dropLocation: row.dropLocation,
  //         isNewCar: false,
  //         phoneNumber: row.phoneNumber,
  //         area: row.area,
  //         message: row.message,
  //         deliveryMode: row.deliveryMode,
  //         city: row.city,
  //         name: row.name,
  //         email: row.email,
  //         packages: row.packages,
  //         brand: row.brand,
  //         model: row.model,
  //       };

  //       debugger;
  //       const response = await axios.patch(
  //         `${serverUrl}/user/updateInquiry/${row._id}`,
  //         updateData
  //       );

  //       console.log("Enquiry updated successfully:", response.data);
  //       if (response.data.status === 200) {
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       console.error("Error updating enquiry:", error);
  //     }
  //   };

  //created booking formated function
  function extractDate(timestamp: string): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <TextField
            id="search"
            size="small"
            label="Search"
            focused
            sx={{ width: 600 }}
            value={searched}
            onChange={(e: any) => requestSearch(e.target.value)}
          />
          <div style={{ textAlign: "end" }}>
            <Button
              startIcon={<PublishIcon />}
              variant="contained"
              color="primary"
              sx={{ textTransform: "capitalize" }}
              onClick={exportToExcel}
            >
              Export
            </Button>
          </div>
        </Box>
        <Paper elevation={3} sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Table
                sx={{ minWidth: 750, fontWeight: "700" }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={Rows.length}
                />
                <TableBody className="table_body">
                  {visibleRows.map((row: any, index) => {
                    const isItemSelected = isSelected(row._id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        onClick={() => openModal(row)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell align="left">
                          {row.carName
                            ? row.carName
                            : row.brand && row.model
                            ? row.brand + " " + row.model
                            : "Car Not Selected"}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.phoneNumber}</TableCell>
                        <TableCell  size="small" align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.startDate}</TableCell>
                        <TableCell align="left">{row.endDate}</TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.bookingCreated
                            ? extractDate(row.bookingCreated)
                            : "02-03-2024"}
                        </TableCell>
                        {/* <TableCell align="left">
                          <EnquiryModelComponent details={row} />{" "}
                          <DeleteEnquiry details={row} />
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
                  <EnquiryModelComponent
                    details={singleData}
                    open={open}
                    setOpen={setOpen}
                  />
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={Rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
