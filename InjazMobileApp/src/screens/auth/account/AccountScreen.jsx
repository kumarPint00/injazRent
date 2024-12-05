import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import images from '../../../constants/images';
import styles from './styles';
import HeaderText from '../../../components/header/headerText/HeaderText';
import ButtonComp from '../../../components/button/ButtonComp/ButtonComp';
import routes from '../../../constants/routes';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.container} source={images.BACKGROUND}>
      <HeaderText titleNext={'Previous'} titleSkip={'Skip Now'} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Do You Have an Account ?</Text>
        <Text style={styles.subTitleStyle}>
          Premium and prestige car monthly rental
        </Text>

        <ButtonComp
          onPress={() => navigation.navigate(routes.SIGNUP_TWO_SCREEN)}
          text="Sign Up"
          textStyle={{
            color: colors.BLACK,
            fontSize: textScale(24),
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          }}
          style={{
            width: '100%',
            backgroundColor: colors.WHITE,
            alignSelf: 'center',
            top: moderateScale(100),
            height: moderateScale(55),
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: moderateScale(126),
          }}>
          <Text
            style={{
              fontSize: textScale(16),
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              color: colors.WHITE,
            }}>
            Or
          </Text>
        </View>
        <ButtonComp
          onPress={() => navigation.navigate(routes.LOGIN_TWO_SCREEN)}
          text="Sign In"
          textStyle={{
            color: colors.WHITE,
            fontSize: textScale(24),
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          }}
          style={{
            width: '100%',
            backgroundColor: colors.BLACK,
            alignSelf: 'center',
            top: moderateScale(150),
            height: moderateScale(55),
            borderWidth: moderateScale(0.5),
            borderColor: colors.WHITE,
          }}
        />
        <View
          style={{
            marginTop: moderateScale(210),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={images.MAZDA6}
            style={{width: moderateScale(410), height: moderateScale(300)}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AccountScreen;
