"use client";
import { CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../footer/footer.css";
import {
  cities,
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
              INJAZ is the first-ever global car rental and leasing marketplace.
              We work with 200+ local car rental companies in Dubai. You can
              choose among their 2000+ verified cars to find the best rental car
              for you.
            </p>
            <div className="foot_icons">
              <Grid container>
                {socialMediaLinks.map((item, index) => (
                  <Grid key={index} item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                    <img src={item.src} alt={item.alt} onClick={item.onClick} />
                  </Grid>
                ))}
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
              <h4>CATEGORIES</h4>
              <ul>
                {cat.map((item:any, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      router.push(`/pages/carWithLocation?category=${item.name}`)
                    }
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
