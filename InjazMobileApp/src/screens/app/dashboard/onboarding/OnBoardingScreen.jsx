import {ImageBackground, View} from 'react-native';
import React from 'react';
import OnBoardingSwiper from '../../../../components/swiper/OnBoardingSwiper';
import images from '../../../../constants/images';

const OnBoardingScreen = () => {
  return (
    <ImageBackground source={images.BACKGROUND} style={{flex: 1}}>
      <OnBoardingSwiper />
    </ImageBackground>
  );
};

export default OnBoardingScreen;
