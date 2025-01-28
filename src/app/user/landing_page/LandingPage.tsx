"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeReviewCard from "./car-cards/RecipeReviewCard";
import ReqDocs from "./req_docs/ReqDocs";
import CustomizedAccordions from "./accordion/CustomizedAccordions";
import CarouselComponent from "./car_slider/HeroSlider";
import CompanyOverview from "./compoverview/CompanyOverview";
import WhyChooseUs from "./why_choose-us/WhyChooseUs";
import HowItWorks from "./how-it-works/HowItWorks";
import { serverUrl } from "../../../utils/helper";
import NavFooter from "@/utils/Na_Fo";
import CarContent from "./carContent/CarContent";

const LandingPage = () => {
  const [cars, setCars] = useState([]);
  const [phoneemail, setPhoneEmail] = useState({});

  useEffect(() => {
    axios
      .get(serverUrl + "/user/getAllCars")
      .then((res) => {
        const newData = res.data.data?.filter(
          (item: any) =>
            item.status === "Active" && item.isOfferApplied !== "Yes"
        );
        setCars(newData);
      })
      .catch((err) => {
        console.log(err);
      });

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

  return (
    <>
      <NavFooter footer={true}>
        <CarouselComponent />
        <RecipeReviewCard />
        <div className="carsCardsSection">
          <CarContent phoneData={phoneemail} data={cars}/>
        </div>
        <ReqDocs />
        <CompanyOverview />
        <WhyChooseUs />
        <HowItWorks />
        <CustomizedAccordions />
      </NavFooter>
    </>
  );
};
export default LandingPage;
