"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverUrl } from "./helper";
import Navbar from "@/app/user/landing_page/navbar/Navbar";
import Footer from "@/app/user/landing_page/footer/Footer";

const NavFooter = (props:any) => {
  const [phoneemail, setPhoneEmail] = useState({});

  useEffect(() => {
    axios
      .get(serverUrl + "/admin/getAllsettings")
      .then((res) => {
        setPhoneEmail(res.data.data[0]);
        console.log(res.data.data[0], "phoneEmail");
         
      })
      .catch((err) => {
        console.log(err, "...error");
      });
  }, []);

  // console.log(phoneemail, "NavFooter");
  return (
    <>
      <Navbar data={phoneemail} />
      {props.children}
      {props.footer && <Footer data={phoneemail} />}
    </>
  );
};

export default NavFooter;