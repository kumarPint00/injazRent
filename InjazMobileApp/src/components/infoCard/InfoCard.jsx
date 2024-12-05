import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const InfoCard = ({
  titleLink,
  subtitleLink,
  titleBook,
  subTitleBook,
  titleCheckOut,
  subTitleCheckOut,
  titleHow,
  onPress,
  iconImage1,
  imageSource1,
  iconImage2,
  imageSource2,
  iconImage3,
  imageSource3,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textHow}>{titleHow}</Text>
      </View>
      <View style={[styles.cardContent]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{titleLink}</Text>
          <Text style={styles.subtitle}>{subtitleLink}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
          <ImageBackground style={styles.iconContainer} source={iconImage1}>
            <Image
              source={imageSource1}
              style={{width: moderateScale(24), height: moderateScale(24)}}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.cardContent, {marginTop: moderateScaleVertical(20)}]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{titleBook}</Text>
          <Text style={styles.subtitle}>{subTitleBook}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
          <ImageBackground style={styles.iconContainer} source={iconImage2}>
            <Image
              source={imageSource2}
              style={{width: moderateScale(24), height: moderateScale(24)}}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.cardContent, {marginTop: moderateScaleVertical(20)}]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{titleCheckOut}</Text>
          <Text style={styles.subtitle}>{subTitleCheckOut}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
          <ImageBackground style={styles.iconContainer} source={iconImage3}>
            <Image
              source={imageSource3}
              style={{width: moderateScale(24), height: moderateScale(24)}}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InfoCard;
