"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../car-cards/carCard.css";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { carCategories } from "./data";

const CarCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
}));

export default function RecipeReviewCard() {
  const router = useRouter();

  return (
    <div className="card_section" id="carWithCategoryID">
      <Container maxWidth="xl">
        <div className="card_heading">
          <h1>Discover Top Car Rental Services in Abu Dhabi & Dubai</h1>
        </div>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {carCategories.map((car, index) => (
            <Grid item xs={6} md={3} sm={3} lg={3} key={index}>
              <CarCard
                className={car.class}
                onClick={() =>
                  router.push(
                    `/pages/carWithCategory?category=${car.category}`
                  )
                }
              >
                <CardContent>
                  <Typography
                    className="car_cat_text_categories"
                    variant="body2"
                    color="text.secondary"
                  >
                    {car.category}
                  </Typography>
                </CardContent>
                <Image
                  src={car.src}
                  alt="carTwo.gif"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </CarCard>
            </Grid>
          ))}
        </Grid>
        {/*<div className="car_des_con">
          <p>
            Done with the endless hunt for a <b>rental car nearby</b>? Look no
            further! Welcome to <b>injazrent.ae</b>, your go-to destination for
            hassle-free <b>car rentals</b> in <b>Abu Dhabi</b> & <b>Dubai</b>.
            As a premier car rental platform, we showcase an extensive range of
            budget-friendly rental options sourced from reputable car hire
            providers across the UAE. Explore our diverse selection of over 2000
            vehicles, carefully curated by trusted rental businesses in the
            region. Whether you are a visitor seeking temporary transportation
            or a resident in need of a long-term solution, we guarantee the most
            competitive rates, starting as low as <b>AED 49 per day</b>.
          </p>
        </div> */}
      </Container>
    </div>
  );
}
