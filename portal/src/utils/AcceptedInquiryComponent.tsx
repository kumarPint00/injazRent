"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AcceptedInquiryComponent = () => {
  const [inquiries, setInquiries] = useState([]);
  const [newEnquiryCount, setNewEnquiryCount] = useState(0);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(
          "https://api.injazrent.ae/user/getInquirys"
        );
        setInquiries(response.data.data);
        setNewEnquiryCount(
          response.data.data.filter((inquiry:any) => inquiry.status==="accepeted").length
        );
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <>
      <span style={{marginRight:"15px", background:"red", padding:"0px 3px", borderRadius:"50%", color:"white"}} > {newEnquiryCount}</span>
    </>
  );
};

export default AcceptedInquiryComponent;