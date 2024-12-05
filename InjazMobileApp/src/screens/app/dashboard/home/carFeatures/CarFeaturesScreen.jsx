import React, {useEffect, useState} from 'react';
import {View, FlatList, ScrollView, Dimensions, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getAllCarsByIdThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import styles from './styles';
import ItemCarFeaturesScreen from '../../../../../components/list/ItemCarFeatures/ItemCarFeatures';
import Loader from '../../../../../components/Loader/Loader';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import routes from '../../../../../constants/routes';
import colors from '../../../../../constants/colors';
import {moderateScale} from '../../../../../styles/responsiveSize';

const CarFeaturesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route?.params?.id;
  console.log(id, '.....id car feature screen');
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data, '...res from categories thunk');
        const {
          engineCapacity,
          seater,
          transmission,
          laggageBootCapacity,
          securityDeposit,
          actualPriceDaily,
          actualPriceMonthly,
          actualPriceWeekly,
          cdwDaily,
          cdwWeekly,
          cdwMonthly,
          paiInsuranceDaily,
          babySeatChargeDaily,
          babySeatChargeWeekly,
          babySeatChargeMonthly,
          deliveryChargeDaily,
          deliveryChargeWeekly,
          deliveryChargeMonthly,
          securityDepositService,
          keyFeatures,
        } = res?.data?.data;

        console.log('Engine Capacity:', engineCapacity);
        console.log('Seater:', seater);
        console.log('Transmission:', transmission);
        console.log('Luggage Boot Capacity:', laggageBootCapacity);
        console.log('Key Features:', keyFeatures);
        const formattedKeyFeatures = keyFeatures.join('\n');
        setCarDetails({
          engineCapacity,
          seater,
          transmission,
          laggageBootCapacity,
          securityDeposit,
          actualPriceDaily,
          actualPriceMonthly,
          actualPriceWeekly,
          cdwDaily,
          cdwWeekly,
          cdwMonthly,
          paiInsuranceDaily,
          babySeatChargeDaily,
          babySeatChargeWeekly,
          babySeatChargeMonthly,
          deliveryChargeDaily,
          deliveryChargeWeekly,
          deliveryChargeMonthly,
          securityDepositService,
          keyFeatures: formattedKeyFeatures,
        });
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <View contentContainerStyle={{backgroundColor: colors.WHITE}}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          bounces={false}
          contentContainerStyle={{
            height:
              Platform.OS == 'android'
                ? Dimensions.get('window').height / 1.33
                : Dimensions.get('window').height / 1.43,
            paddingBottom:
              carDetails.length > 0 ? moderateScale(150) : moderateScale(20),
          }}
          showsVerticalScrollIndicator={false}
          data={[
            {name: 'Transmission', value: carDetails.transmission},
            {name: 'Engine Capacity', value: carDetails.engineCapacity},
            {
              name: 'Luggage Boot Capacity',
              value: carDetails.laggageBootCapacity,
            },
            {name: 'Seater', value: carDetails.seater},
            {name: 'Key Features', value: carDetails.keyFeatures},
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ItemCarFeaturesScreen
              item={item}
              index={index}
              isSelected={isSelected}
              setCarsDetails={setCarDetails}
            />
          )}
        />
      )}

      {/* {!isLoading && (
        <View style={{flex: 1}}>
          <View style={styles.buttonContainer}>
            <ButtonComp
              // onPress={() => navigation.navigate(routes.BOOKING_ADDRESS_SCREEN)}
              activeOpacity={0.9}
              text={
                selectedLanguage === 'en' ? 'Okay Got it' : 'حسنا حصلت عليه'
              }
              textStyle={{color: colors.BLACK}}
              style={styles.buttonStyle}
            />
          </View>
        </View>
      )} */}
    </View>
  );
};

export default CarFeaturesScreen;
