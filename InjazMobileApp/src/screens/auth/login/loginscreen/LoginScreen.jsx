import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  Platform,
} from 'react-native';
import images from '../../../../constants/images';
import styles from './styles';
import AuthButton from '../../../../components/button/appButton/AppButton';
import {useNavigation} from '@react-navigation/native';
import {SignUpScreen} from '../../..';
import LoginMain from '../loginmain/LoginMain';
import Header from '../../../../components/header/header/Header';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import colors from '../../../../constants/colors';
import {moderateScale} from '../../../../styles/responsiveSize';
import Message from '../../../../components/message/Message';
import routes from '../../../../constants/routes';

const LoginScreen = () => {
  const [activeButton, setActiveButton] = useState('Login');
  const selectedLanguage = useSelector(selectLanguage);
  const [message, setMessage] = useState(null);
  const handleLoginPress = () => {
    setActiveButton('Login');
  };

  const handleSignupPress = () => {
    setActiveButton('SignUp');
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <View style={styles.headerStyle}>
          <View style={styles.cityImgBackground}>
            <Image
              resizeMode="contain"
              source={images.CITY}
              style={styles.imageCity}
            />
            {/* <View style={styles.headerContainer}>
              <Header
                leftIcon={images.ARROW_LEFT}
                title={activeButton === 'Login' ? 'Login' : 'SignUp'}
                titleSkip={'Skip'}
                activeOpacity={0.7}
                onPress={handleNavigateToRoot}
              />
            </View> */}
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
              backgroundColor: colors.WHITE,
              ...Platform.select({
                android: {
                  elevation: 3,
                  borderRadius: moderateScale(30),
                },
                ios: {
                  shadowColor: 'black',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  borderRadius: moderateScale(30),
                },
              }),
              bottom: moderateScale(35),
              padding: 15,
            }}>
            <AuthButton
              label={selectedLanguage === 'en' ? 'Login' : 'تسجيل الدخول'}
              isActive={activeButton === 'Login'}
              onPress={handleLoginPress}
            />
            <AuthButton
              label={selectedLanguage === 'en' ? 'SignUp' : 'اشتراك'}
              isActive={activeButton === 'SignUp'}
              onPress={handleSignupPress}
            />
          </View>

          {/* Button Toggle Container */}
          <View style={styles.screenContainer}>
            {activeButton === 'SignUp' && <SignUpScreen />}
            {activeButton === 'Login' && <LoginMain />}
          </View>
          {/* Show message component */}
          {message && (
            <View style={styles.messageContainer}>
              <Message type={message.type} message={message.text} />
            </View>
          )}
        </View>
        {/* Footer Container */}
        <View style={styles.footerContainer}>
          <ImageBackground
            resizeMode="contain"
            source={images.FOOTER}
            style={styles.carImageStyle}>
            <Image />
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
