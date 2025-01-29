"use client";
import { Box, CardActionArea, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../footer/footer.css";
import {
  dailyWeeklyButton,
  legal,
  menuItems,
  scrollToSection,
  socialMediaLinks,
} from "./data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { serverUrl } from "@/utils/helper";
interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const router = useRouter();

  const handlePhoneClick = () => {
    window.open(`tel:${data?.phoneNumber}`, "_blank");
  };

  const handleMailClick = () => {
    (window.location.href = `mailto:${data?.email}`), "_blank";
  };

  const [cat, setCat] = useState([]);

  useEffect(() => {
    axios
      .get(serverUrl + "/user/getAllCategoryes")
      .then((res) => {
        setCat(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <section id="footer" className="footer">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <CardActionArea>
              <Image
                src="/injazFinalLogowebp.webp"
                alt="footer logo"
                height={65}
                width={235}
              />
            </CardActionArea>
            <p className="foot_text">
              INJAZ RENT A CAR can sometimes seem overwhelming with its numerous
              considerations. At Quick Lease Car Rentals, we aim to eliminate
              the confusion by offering a simple and hassle-free leasing
              process.
            </p>
            <div className="foot_icons">
              <Grid container>
                <Box className="footer_social_media_images">
                  {socialMediaLinks.map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      onClick={item.onClick}
                    />
                  ))}
                </Box>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>QUICK LINKS</h4>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (item.label === "About Us") {
                        router.push("/pages/aboutUs");
                      }
                      if (item.label === "Contact Us") {
                        router.push("/pages/contactUs");
                      } else if (item.sectionId) {
                        scrollToSection(item.sectionId);
                      }
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>SUBSCRIPTION</h4>
              <ul>
                {dailyWeeklyButton.map((item: any, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      sessionStorage.setItem("subscription", item.subs);
                      router.push(`/pages/carWithLocation?${item.route}`);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>LEGAL</h4>
              <ul>
                {legal.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (item === "Terms & Conditions") {
                        router.push("/pages/termsAndcondition");
                      }
                      if (item === "Privacy Policy") {
                        router.push("/pages/privacyPolicy");
                      }
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="link_two">
              <h4>CONTACT</h4>
              <ul>
                <li>
                  Al Mihad St, Mohamed Bin Zayed City, ME-10, Abu Dhabi, UAE
                </li>
                <li onClick={handleMailClick}>{data?.email}</li>
                <li onClick={handlePhoneClick}>{data?.phoneNumber}</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <div className="footerCopyRight">
          <p>
            © Copyright 2023 All Rights Reserved Designed Trackers Solution
            Dubai.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
