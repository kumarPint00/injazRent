// SwiperComponent.js
import React, {useRef, useState} from 'react';
import {View, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {bannerData} from '../../constants/list';

const SwiperComponent = ({setCurrentIndex, currentIndex}) => {
  const [data, setData] = useState(bannerData);

  const swiperRef = useRef();
  return (
    <View style={styles.swiper}>
      <Swiper
        ref={swiperRef}
        index={currentIndex}
        onIndexChanged={index => setCurrentIndex(index)}
        showsPagination={true}
        dotStyle={styles.customDotStyle}
        autoplay={false}
        activeDotStyle={styles.customActiveDotStyle}>
        {data.map((item, index) => (
          <ImageBackground
            resizeMode="contain"
            style={styles.swiperStyle}
            source={item.image}
            key={index}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default SwiperComponent;
