"use client";
import { Container, Grid } from "@mui/material";
import React from "react";

const GoldSecMem = () => {
  return (
    <section className="platSecMem">
      <div className="goldSecHead">
        <h1>Gold Membership</h1>
      </div>
      <div className="goldSecMain">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="platLeft">
                <img src="/goldImg.png" alt="platinumImg" />

                <p>
                  How to be eligible for{" "}
                  <span className="spanWord">Gold</span> membership:
                </p>
                <p>
                  Once the customer complete{" "}
                  <span className="spanWord"> ten contracts</span>; or
                  achieve <span className="spanWord">15,000 miles</span>, during
                  the year 1st of January – 31st of December the membership will
                  be automatically upgraded the Gold membership if customer
                  meets the Terms and Conditions.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="platRight">
                <p>
                  <span className="spanWord">24 hours</span> booking
                  confirmation prior to pick up schedule time *Terms &
                  conditions apply
                </p>
                <p>
                  Additional <span className="spanWord">(100 KM/DAY)</span>.
                </p>
                <p>
                  <span className="spanWord">(20%)</span> discount on contract
                  value including rental charges (Daily, weekly, monthly or
                  yearly), excess KM and car shipping cost for one way bookings
                  from one city to another.
                </p>
                <p>
                  Additional <span className="spanWord">(3)</span> hour(s) to
                  car drop off time.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default GoldSecMem;
