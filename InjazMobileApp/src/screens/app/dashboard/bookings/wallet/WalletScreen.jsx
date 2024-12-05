import {View, Image, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import styles from './styles';
import colors from '../../../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {getAllWalletThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import {walletData} from '../../../../../constants/list';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';
import Loader from '../../../../../components/Loader/Loader';

const WalletScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getAllWallets();
  }, []);

  const getAllWallets = () => {
    setIsLoading(true);
    dispatch(getAllWalletThunk())
      .unwrap()
      .then(apiResponse => {
        console.log(apiResponse, '.......response wallet');
        if (Array.isArray(apiResponse) && apiResponse.length > 0) {
          setBalance(apiResponse);
        } else {
          console.log('No branches available.');
        }
      })
      .catch(error => {
        console.error('Error fetching branches:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        title={selectedLanguage === 'en' ? 'Wallet' : 'محفظة'}
        backIcon={images.ARROW_LEFT}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={images.WALLET_ICON}
          style={styles.imageStyle}
        />
      </View>
      {/* <FlatList
        data={walletData}
        renderItem={({item, index}) => {
          const tintColor = index === 0 ? colors.GREEN : colors.BLUE;

          return (
            <View style={styles.itemContainer}>
              <View style={styles.rowContainer}>
                <View style={styles.iconContainer}>
                  <View style={styles.iconBackground}>
                    <Image
                      source={item.call_type}
                      style={[styles.icon, {tintColor: tintColor}]}
                    />
                  </View>
                  <Text style={styles.dateText}>
                    {selectedLanguage === 'en' ? item.date.en : item.date.ar}
                  </Text>
                </View>

                <View style={styles.infoContainer}>
                  <Text style={styles.receivedText}>
                    {selectedLanguage === 'en'
                      ? item.received.en
                      : item.received.ar}
                  </Text>
                  <Text>
                    {selectedLanguage === 'en'
                      ? item.referalId.en
                      : item.referalId.ar}
                  </Text>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>
                    {selectedLanguage === 'en' ? item.price.en : item.price.ar}
                  </Text>
                  <Text>
                    {selectedLanguage === 'en' ? item.type.en : item.type.ar}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      /> */}
      {isLoading && <Loader visible={isLoading} />}

      <FlatList
        data={balance}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(10),
              }}>
              <Text
                style={{
                  fontSize: textScale(14),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  color: colors.BLACK,
                }}>
                Available Balance
              </Text>
              <Text
                style={{
                  fontSize: textScale(14),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  marginStart: moderateScale(5),
                  color: colors.BLACK,
                }}>
                {item.balance}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WalletScreen;
