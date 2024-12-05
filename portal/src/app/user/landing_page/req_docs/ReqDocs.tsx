import React from "react";
// import "./reqdocs.css";
import "../req_docs/reqdocs.css";
import { Box, CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import UAEImg from "../../../../../public/uae card.webp";
import touristImg from "../../../../../public/uae card 1.webp";
import Link from "next/link";

const ReqDocs = () => {
  return (
    <>
      <section className="required_documents">
        <Container maxWidth="xl">
          {/*<div className="req_heading">*/}
          {/* <h2>Latest Car Rental Offers in Abu Dhabi & Dubai</h2> */}
          <h3>
            {/*} Unlock Exclusive Deals: The Newest Car Rental Offers in Abu Dhabi
              & Dubai*/}
          </h3>
          {/*</div>*/}
          {/*<div className="req_para">*/}
          {/* <p>
            Choose among cars with in-demand driving features and high mileage,
            and rent a car at the best price. Exclusive car rental discounts,
            updated seasonally!
          </p> */}
          {/*} <p>*/}
          {/*} Select from a range of vehicles boasting sought-after driving
              features and impressive mileage, and secure a rental at an
              unbeatable price. Enjoy exclusive discounts on car rentals,
              refreshed seasonally for your convenience!*/}
          {/*</p>*/}
          {/*</div>*/}
          <div className="req_heading">
            <h3>Documents Required for Car Rental in the UAE</h3>
          </div>
          <div className="req_para">
            {/* <p>
              If you’re planning a trip to the UAE, you’ll find that all major
              attractions in the UAE are spread far and wide. From unique
              shopping destinations like the Mall Of The Emirates, popular
              landmarks such as the Sheikh Zayed Grand Mosque in Abu Dhabi to
              exquisite hotels and resorts located in Ras Al Khaimah, the best
              way to get around is by car. You are eligible to rent a car across
              the emirates provided you have the below mentioned valid documents
              with you:
            </p> */}
            <p>
              For travelers exploring the UAE, you will discover that its major
              attractions are scattered across vast distances. From iconic
              shopping havens like the Mall of the Emirates to revered landmarks
              such as the Sheikh Zayed Grand Mosque in Abu Dhabi, and luxurious
              accommodations nestled in Abu Dhabi & Dubai, a car offers the
              ultimate freedom of mobility. To rent a car across the emirates,
              ensure you have the following valid documents at hand:
            </p>
          </div>
          <Container
            maxWidth="xl"
            sx={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <div className="uae_res">
                  <h6>For UAE Residents</h6>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      height: { xs: "22rem", md: "20rem" },
                    }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                        <Image
                          src={UAEImg}
                          alt="carTwo.gif"
                          sizes="100vw"
                          style={{
                            width: "200px",
                            height: "150px",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para"> UAE Driving License</p>
                      </div>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para">
                          {" "}
                          Emirates ID (Residential Visa may be acceptable)
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <div className="uae_res">
                  <h6>For Tourists visiting the UAE</h6>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      height: { xs: "22rem", md: "20rem" },
                    }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                        <Image
                          src={touristImg}
                          alt="carTwo.gif"
                          sizes="100vw"
                          style={{
                            width: "200px",
                            height: "150px",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para"> Passport</p>
                      </div>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para"> Visit Visa</p>
                      </div>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para">
                          {" "}
                          Home Country Driving License
                        </p>
                      </div>
                      <div className="int_icon_two">
                        <CircleIcon
                          sx={{
                            color: "black",
                            fontSize: "0.5rem",
                            marginRight: "5px",
                          }}
                        />{" "}
                        <p className="int_text_para">
                          {" "}
                          International Driving Permit (IDP)
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
          {/* <Link href="/linkComponent">Link</Link> */}
        </Container>
      </section>
    </>
  );
};

export default ReqDocs;
