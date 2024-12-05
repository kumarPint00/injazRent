import {ToastAndroid, Image, ScrollView, Text, View, Alert} from 'react-native';
import React from 'react';
import images from '../../../../../constants/images';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import InfoCard from '../../../../../components/infoCard/InfoCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';

const InviteFriendsScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const copyToClipboard = () => {
    Clipboard.setString('Share invite code with friends HGT9LL8MEE');
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravityAndOffset(
        'Code Copied',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      Alert.alert('Code Copied');
    }
  };

  const shareInviteCode = () => {
    const options = {
      message: 'Share InjazRental With Your Friends And Family Members',
      url: 'com.vedictech.injazrental',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={
          selectedLanguage === 'en' ? 'Invite your friend' : 'ادعو أصدقائك'
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              source={images.INVITE}
              style={styles.imageInvite}
            />
          </View>

          <View style={styles.containerEarn}>
            <Text style={styles.titleEarn}>
              {selectedLanguage === 'en'
                ? 'Earn a free car'
                : 'اربح سيارة مجانية'}
            </Text>
          </View>
          <View style={styles.textDidContainer}>
            <Text style={styles.textDid}>
              {selectedLanguage === 'en'
                ? 'Did you know you can earn up to AED 3000 by referring 10 friends in a month ? That’s equal to a month subscription.'
                : 'هل تعلم أنه يمكنك كسب ما يصل إلى 3000 درهم عن طريق الإحالة على 10 أصدقاء في الشهر؟ هذا يعادل اشتراك شهري.'}
            </Text>
          </View>
          <View style={styles.line}>
            <View style={styles.bottomContainer}>
              <View style={styles.buttonCode}>
                <Text style={styles.buttonTextCode}>HGT9LL8MEE</Text>
              </View>
            </View>
          </View>
          <InfoCard
            titleHow={
              selectedLanguage === 'en' ? 'How it works?' : 'كيف يعمل الأمر؟'
            }
            titleLink={
              selectedLanguage === 'en'
                ? '1 Share Link to your friends'
                : '1 شارك الرابط مع أصدقائك'
            }
            subtitleLink={
              selectedLanguage === 'en'
                ? 'Once they sign up, they Will get AED 300'
                : 'بمجرد التسجيل، سيحصلون على 300 درهم'
            }
            titleBook={
              selectedLanguage === 'en'
                ? '2 Friends book a car'
                : '2 أصدقاء يحجزون سيارة'
            }
            subTitleBook={
              selectedLanguage === 'en'
                ? 'As soon as the booking is approved, you will be credited automatically'
                : 'بمجرد الموافقة على الحجز، سيتم اعتماد الرصيد تلقائيًا'
            }
            titleCheckOut={
              selectedLanguage === 'en' ? '3 Checkout' : '3 تسجيل الخروج'
            }
            subTitleCheckOut={
              selectedLanguage === 'en'
                ? 'Pay for your next subscription or add-ons with your wallet credit'
                : 'ادفع للاشتراك القادم أو الإضافات باستخدام رصيد محفظتك'
            }
            onPress={() => {}}
            bottomPosition={{bottom: 200}}
            iconImage1={images.RECT_GREEN}
            imageSource1={images.LINK}
            iconImage2={images.RECT_RED}
            imageSource2={images.CAR}
            iconImage3={images.RECT_LIGHT_GREEN}
            imageSource3={images.CARD}
          />
          <View style={styles.buttonContainer}>
            <ButtonComp
              onPress={() => copyToClipboard()}
              textStyle={styles.buttonTextCopy}
              text={
                selectedLanguage === 'en'
                  ? 'Copy invite code'
                  : 'نسخ رمز الدعوة'
              }
              style={styles.buttonCopy}
            />
            <ButtonComp
              onPress={() => {
                shareInviteCode();
              }}
              activeOpacity={0.9}
              textStyle={styles.buttonTextInvite}
              text={
                selectedLanguage === 'en'
                  ? 'Share invite code'
                  : 'مشاركة رمز الدعوة'
              }
              style={styles.buttonInvite}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InviteFriendsScreen;
