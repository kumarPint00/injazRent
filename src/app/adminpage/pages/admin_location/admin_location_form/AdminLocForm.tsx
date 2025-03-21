"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "../AdminLocation.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { serverUrl } from "@/utils/helper";

interface ReqDocsFormData {
  name: string;
  status: string;
}

interface IErrors {
  name: boolean;
  select: boolean;
}
const serverAPI='https://api.injazrent.ae'
const localAPI ='http://localhost:4000'

const AdminLocForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("verify");
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ name: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (id) {
      axios
        .get(serverUrl+`/user/getCarLocation/${id}`)
        .then((res) => {
           ;
          const { Name, Status, CreatedDate, UpdatedDate } = res.data.data;
          setdata({
            _id: id,
            Name: Name,
            Status: Status,
            CreatedDate: CreatedDate,
            UpdatedDate: UpdatedDate,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      //severAPI+'/user/getCarModel/64f9c31050e6d77e2c177787'
    }
  }, []);
  const handleTextChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    //  ;
    setSelect(event.target.value);
  };

  const router = useRouter();
  const [data, setdata] = useState({
    _id: "",
    Name: "",
    Status: "Active",
    CreatedDate: "1/2/2023",
    UpdatedDate: "1/2/2024",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReqDocsFormData>();

  const onSubmit: any = (e: any) => {
    e.preventDefault();
    //  
    if (!textName) {
      setErrors({ ...error, name: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { name: string; status: string } = {
      name: textName,
      status: select,
    };
    payload.name = textName;
    payload.status = select;
    console.log(payload, "payload");
    router.push("/pages/adminAdminLocation");
  };

  const handle = (e: any) => {
    const newdata: any = { ...data };
    newdata[e.target.name] = e.target.value;
    setdata(newdata);
  };

  const HandleSubmits = (e: any) => {
    e.preventDefault();
    if (id) {
      axios
        .put(serverUrl+"/user/updateCarLocation", {
          _id: id,
          Name: data.Name,
          Status: "Active",
          CreatedDate: data.CreatedDate,
          UpdatedDate: data.UpdatedDate,
        })
        .then((res) => {
          Swal.fire(
            "Updated!",
            "The car LOcation has been updated.",
            "success"
          );
           ;
          setdata({
            _id: "",
            Name: "",
            Status: "Active",
            CreatedDate: "11/09/2023",
            UpdatedDate: "11/09/2023",
          });
        })
        .catch((err) => {
          console.log(err);
           ;
        });
    } else {
      axios
        .post(serverUrl+"/user/createcarLoaction", {
          Name: data.Name,
          Status: "Active",
          CreatedDate: data.CreatedDate,
          UpdatedDate: data.UpdatedDate,
        })
        .then(() => {
          Swal.fire("Added!", "The car Location has been added.", "success");
          setdata({
            _id: "",
            Name: "",
            Status: "Active",
            CreatedDate: "",
            UpdatedDate: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    router.push("/pages/adminAdminLocation");
  };
  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e) => HandleSubmits(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Location</h1>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      required
                      name="Name"
                      value={data.Name}
                      onChange={(e) => handle(e)}
                      sx={{ height: "50 px" }}
                      error={error.name}
                      helperText={error.name && "This name field is required"}
                    />
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      id="status"
                      label="Status"
                      name="Status"
                      // value={status??""}
                      value={data.Status}
                      onChange={(e) => handle(e)}
                      required
                    >
                      <MenuItem value={"active"}>Active</MenuItem>
                      <MenuItem value={"inactive"}>Inactive</MenuItem>
                    </Select>

                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid> */}
              </Grid>
            </div>
            <div className="magcatbtn">
              <Button
                variant="contained"
                type="submit"
                className="catsubmitbtn"
                color="primary"
              >
                {id ? "Update" : "Submit"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/pages/adminAdminLocation")}
              >
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default AdminLocForm;
