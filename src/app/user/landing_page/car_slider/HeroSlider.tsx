import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent: React.FC = () => {
  const onChange = (index: number, item: any) => {
    // Handle change event if needed
  };

  const onClickItem = (index: number, item: any) => {
    // Handle click on item event if needed
  };

  const onClickThumb = (index: number, item: any) => {
    // Handle click on thumb event if needed
  };

  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showIndicators={false}
      interval={10000}
      transitionTime={3000}
    >
      <div>
        <img src="banner-injaz-1.jpg" alt="Legend 1" />
      </div>
      <div>
        <img src="/INJAZ SAUDI NATIONAL DAY 1.webp" alt="Legend 1" />
      </div>
      <div>
        <img src="/saudi national day  2.webp" alt="Legend 1" />
      </div>
      <div>
        <img src="/teacher1.webp" alt="Legend 1" />
      </div>
      <div>
        <img src="/teacher2.webp" alt="Legend 1" />
      </div>
      <div>
        <img
          src="/inajz price drop banner 06 06 2024 copy.webp"
          alt="Legend 1"
        />
      </div>
      <div>
        <img src="/new inajz banner 16 05 copy.webp" alt="Legend 1" />
      </div>
      <div>
        <img src="/new sunny inajz banner 16 05 copy.webp" alt="Legend 1" />
      </div>
      <div>
        <img src="/injaz new banner.webp" alt="Legend 1" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
