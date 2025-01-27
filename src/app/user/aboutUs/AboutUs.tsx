import React from "react";
import { Box, Container, Typography } from "@mui/material";
import NavFooter from "@/utils/Na_Fo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const styles: any = {
  box: {
    marginTop: "2rem",
  },
  box2: {
    marginBottom: "1.5rem",
  },
  typography: {
    color: "#01437d",
    fontSize: "2.5rem",
    fontWeight: 500,
    fontFamily: "sans-serif",
  },
  typography2: {
    fontSize: "1.3rem",
    fontWeight: 400,
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "2.3rem",
  },
  typography3: {
    padding: "0rem 2rem",
    fontSize: "1.3rem",
    fontWeight: 400,
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "2.3rem",
    color: "black",
  },
  typography4: {
    padding: "0rem 4rem",
    color: "black",
    fontWeight: 400,
    fontSize: "1rem",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "flex-start.",
    alignItems: "center",
  },
  typography5: {
    color: "#01437d",
    fontWeight: 500,
    fontSize: "2rem",
    fontFamily: "sans-serif",
    marginBottom: "1.5rem",
  },
  typography6: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "black",
    marginBottom: "1rem",
  },
  typography7: {
    padding: "0rem 4rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "1rem",
  },
  typography8: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginRight: "1rem",
    color: "#01437d",
  },
};

const AboutUs = () => {
  const coreValues = [
    {
      heading: "1. Customer Satisfaction:",
      points: [
        "Flexibility and competitive pricing.",
        "Dedicated specialists for long-term lease plans.",
      ],
    },
    {
      heading: "2. Safety & Maintenance:",
      points: [
        "Regular safety checks and meticulous vehicle maintenance to ensure client peace of mind.",
      ],
    },
    {
      heading: "3. Diverse Fleet:",
      points: [
        "A broad selection of vehicles to accommodate individual preferences and corporate requirements.",
      ],
    },
  ];

  const ourFleet = ["Hatchbacks", "Sedans", "Compacts", "SUVs", "Luxury Cars"];

  const ourVision = [
    "To be the go-to car rental service in the UAE by delivering trust, quality, and flexibility, backed by a diverse fleet and exceptional customer care.",
    "Whether you're seeking a budget-friendly ride for personal use or a luxury vehicle for business needs, INJAZ Rental Cars guarantees a seamless and reliable experience.",
    "Drive with Confidence. Rent with INJAZ!",
  ];

  const whyChoose = [
    {
      point: "Wide Selection: ",
      content: "Access to a vast and versatile fleet of vehicles.",
    },
    {
      point: "Flexibility:",
      content: "Customized rental plans to suit individuals and businesses.",
    },
    {
      point: "Reliability:",
      content:
        "A strong focus on vehicle maintenance and customer satisfaction.",
    },
    {
      point: "Competitive Pricing: ",
      content: "Affordable rates without compromising on quality.",
    },
  ];

  const whyChoosePara = [
    "Whether you need a dependable car for a day, a month, or longer, or you're seeking premium vehicles for your business operations, INJAZ Rental Cars is your trusted partner.",
    "Experience convenience, quality, and value with INJAZ—your ultimate car rental solution in the UAE!",
  ];

  const mobility = [
    "At INJAZ Rental Cars, your peace of mind is our priority. With a focus on delivering exceptional value, quality service, and unmatched flexibility, we strive to be your trusted partner in car rentals, whether for personal use or business operations.",
    "Let INJAZ Rental Cars take the wheel—experience reliable, affordable, and customer-focused car rental services today!",
  ];

  return (
    <>
      <NavFooter footer={true}>
        <Box sx={styles.box}>
          <Container maxWidth="lg">
            <Box>
              <Typography variant="h4" gutterBottom sx={styles.typography}>
                About INJAZ RENT A CAR
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={styles.typography2}
              >
                <b>INJAZ Rental Cars</b> premier car rental service in united
                Arab Emirates Started Rent A Car business in 2016 based in Abu
                Dhbai , catering to both <b>individuals</b> and{" "}
                <b>corporate clients</b> with flexible short-term and long-term
                rental plans. With a fleet exceeding <b>70 models</b> spanning{" "}
                <b>1000+ car brands</b>, we provide a wide variety of vehicles,{" "}
                <b>
                  including hatchbacks, sedans, compacts, SUVs & luxury Cars
                </b>{" "}
                tailored to meet diverse client needs.
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" gutterBottom sx={styles.typography5}>
                Our Core Values
              </Typography>
              {coreValues.map((item, index) => (
                <>
                  <Box sx={styles.box2}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      key={index}
                      sx={styles.typography3}
                    >
                      {item.heading}
                    </Typography>
                    {item.points.map((item, index) => (
                      <Typography
                        key={index}
                        variant="subtitle2"
                        gutterBottom
                        sx={styles.typography4}
                      >
                        <ArrowRightAltIcon sx={styles.icon} />
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </>
              ))}
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" color="initial" sx={styles.typography5}>
                Our Fleet
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={styles.typography6}
              >
                With a fleet featuring over 70 vehicle models from 1,000+ global
                car brands, we provide an extensive range of options, including:
              </Typography>
              {ourFleet.map((item, index) => (
                <Typography
                  variant="body1"
                  gutterBottom
                  key={index}
                  sx={styles.typography7}
                >
                  <ArrowRightAltIcon sx={styles.icon} />
                  {item}
                </Typography>
              ))}
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={styles.typography6}
              >
                This diversity ensures we can meet the unique needs of every
                client, from practical everyday rentals to premium luxury
                experiences.
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" color="initial" sx={styles.typography5}>
                Our Vision
              </Typography>
              {ourVision.map((item, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  gutterBottom
                  sx={styles.typography6}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" color="initial" sx={styles.typography5}>
                Our Mission
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={styles.typography6}
              >
                Our goal is to create a customer-centric environment where
                clients feel comfortable and valued. Whether you need a compact
                hatchback for daily commutes, a stylish sedan for business
                travel, or a robust SUV for off-road adventures, INJAZ Rental
                Cars ensures you get a vehicle that matches your needs while
                prioritizing safety and regular maintenance.
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" color="initial" sx={styles.typography5}>
                Why Choose INJAZ Rental Cars?
              </Typography>
              {whyChoose.map((item, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  gutterBottom
                  sx={styles.typography8}
                >
                  <ArrowRightAltIcon sx={styles.icon} />
                  <b>{item.point}</b> {item.content}
                </Typography>
              ))}
              {whyChoosePara.map((item, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  gutterBottom
                  sx={styles.typography6}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Box sx={styles.box}>
              <Typography variant="h5" color="initial" sx={styles.typography5}>
                Your Partner in Mobility
              </Typography>
              {mobility.map((item, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  gutterBottom
                  sx={styles.typography6}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Container>
        </Box>
      </NavFooter>
    </>
  );
};

export default AboutUs;
