import { Card, Container, Grid } from "@mui/material";
import React from "react";
import "../how-it-works/HowItWorks.css";
import { cardData } from "./data";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <Container maxWidth="xl">
        <div className="howWorkHead">
          <h3>How It Works</h3>
        </div>
        <div className="howWorkSubHead">
          <h4>Make it happens in 4 easy steps! Best Of Luck</h4>
        </div>
        <Card className="howWorksImg">
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              {cardData.map((item, index) => (
                <Grid key={index} item xs={12} sm={3} md={3} lg={3}>
                  <div className="selectCar">
                    <Image
                      src={item.src}
                      alt={item.heading}
                      height={200}
                      width={200}
                    />
                    <h3>{item.heading}</h3>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Card>
      </Container>
    </section>
  );
};

export default HowItWorks;
