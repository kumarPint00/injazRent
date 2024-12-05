"use client";
import React from "react";
import { useState } from "react";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import { useRouter } from "next/navigation";
import Navlinks from "../navlinks/NavLinks";
import axios from "axios";
import { serverUrl } from "@/utils/helper";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import drawerLogo from "../../../../../public/injaz white colour logowebp.webp";

// ** mui Imports **
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CustomCollapsibleListItem from "./CustomCollapsibleListItem";
interface Props {
  data: any;
}

const drawerWidth = 165;

function Navbar(props: Props) {
  const { t } = useTranslation();
  const { data } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eopen, setEopen] = React.useState(false);
  const [brandopen, setbrandopen] = React.useState(false);
  const [catOpen, setCatOpen] = React.useState(false);
  const [subsOpen, setSubsOpen] = React.useState(false);
  const [location, setLocation] = useState([]);
  const [drop, setdrop] = useState([]);
  const [cat, setCat] = useState([]);

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      "Hi, \nI’m contacting you through Injazrent.ae. \nI’d like to rent the car on Daily, Weekly and Monthly packages. \nIs it available?"
    );
    window.open(`https://wa.me/${data?.phoneNumber}?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${data?.phoneNumber}`, "_blank");
  };

  const handleMailClick = () => {
    (window.location.href = `mailto:${data?.email}`), "_blank";
  };
  const router = useRouter();

  React.useEffect(() => {
    axios
      .get(serverUrl + "/user/getAllcarLoaction")
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });

    axios
      .get(serverUrl + "/user/getAllBrands")
      .then((res) => {
        setdrop(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });

    axios
      .get(serverUrl + "/user/getAllCategoryes")
      .then((res) => {
        setCat(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setEopen(false);
    setbrandopen(false);
    setCatOpen(false);
    setSubsOpen(false);
  };

  const eopenClick = () => {
    setEopen(!eopen);
  };
  const brandopenClick = () => {
    setbrandopen(!brandopen);
  };
  const catOpenClick = () => {
    setCatOpen(!catOpen);
  };
  const subsOpenClick = () => {
    setSubsOpen(!subsOpen);
  };

  const subscriptionData = [
    {
      name: "daily",
    },
    {
      name: "weekly",
    },
    {
      name: "monthly",
    },
  ];

  const customCollapsibleListItemArray = [
    {
      id: 1,
      toggleClick: eopenClick,
      Icon: LocationOnIcon,
      text: "LOCATION",
      open: eopen,
      data: location,
      drawerToggle: handleDrawerToggle,
      setOpen: setEopen,
      queryParam: "location",
    },
    {
      id: 2,
      toggleClick: brandopenClick,
      Icon: DashboardIcon,
      text: "BRAND",
      open: brandopen,
      data: drop,
      drawerToggle: handleDrawerToggle,
      setOpen: setbrandopen,
      queryParam: "brand",
    },
    {
      id: 3,
      toggleClick: catOpenClick,
      Icon: CategoryIcon,
      text: "CATEGORY",
      open: catOpen,
      data: cat,
      drawerToggle: handleDrawerToggle,
      setOpen: setCatOpen,
      queryParam: "category",
    },
    {
      id: 4,
      toggleClick: subsOpenClick,
      Icon: CategoryIcon,
      text: "SUBSCRIPTION",
      open: subsOpen,
      data: subscriptionData,
      drawerToggle: handleDrawerToggle,
      setOpen: setSubsOpen,
      queryParam: "",
    },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#01437d",
        }}
        onClick={() => router.push("/")}
      >
        <Image
          src={drawerLogo}
          alt="logo"
          className="drawerImg"
        />
      </Box>
      <Divider />
      {customCollapsibleListItemArray.map((item) => (
        <CustomCollapsibleListItem
          key={item.id}
          toggleClick={item.toggleClick}
          Icon={item.Icon}
          text={item.text}
          open={item.open}
          data={item.data}
          drawerToggle={item.drawerToggle}
          setOpen={item.setOpen}
          queryParam={item.queryParam}
        />
      ))}
      <ListItemButton
        onClick={() => {
          handleWhatsappClick();
          handleDrawerToggle();
        }}
        className="list_item_text"
      >
        <ListItemIcon
          sx={{
            minWidth: "25px",
            cursor: "pointer",
          }}
        >
          <WhatsAppIcon
            sx={{
              color: "#00ff00",
              fontSize: "20px",
            }}
          />
        </ListItemIcon>
        <ListItemText
          sx={{ color: "black", fontWeight: "600" }}
          primary="WHATSAPP"
        />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          handlePhoneClick();
          handleDrawerToggle();
        }}
        className="list_item_text"
      >
        <ListItemIcon sx={{ minWidth: "25px" }}>
          <CallIcon
            sx={{
              color: "#01437d",
              fontSize: "20px",
            }}
          />
        </ListItemIcon>
        <ListItemText
          sx={{ color: "black", fontWeight: "600" }}
          primary={data?.phoneNumber}
        />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          handleMailClick();
          handleDrawerToggle();
        }}
        className="list_item_text"
      >
        <ListItemIcon sx={{ minWidth: "25px" }}>
          <MailOutlineIcon sx={{ color: "#01437d", fontSize: "20px" }} />
        </ListItemIcon>
        <ListItemText
          sx={{ color: "black", fontWeight: "600" }}
          primary={data?.email}
        />
      </ListItemButton>
    </Box>
  );

  return (
    <>
      <Box
        id="mainNavbar"
        sx={{
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#01437d" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              <img
                src="/injaz white colour logowebp.webp"
                alt="logo"
                className="navLogoIMG"
              />
            </Typography>
            <Navlinks data={data} />
            <Box
              sx={{
                padding: { xs: "0px", sm: "16px" },
                width: { xs: "100%", sm: "auto" },
                textAlign: { xs: "right" },
                display: "flex",
              }}
            >
              <Button
                onClick={() => router.push("/pages/login")}
                sx={{
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 20px !important",
                  },
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  marginRight: "10px",
                  fontSize: "1rem",
                  padding: "4px 20px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                }}
                variant="text"
              >
                {t("landingPage:navbar.login")}
              </Button>
              <EnquiryForm />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
