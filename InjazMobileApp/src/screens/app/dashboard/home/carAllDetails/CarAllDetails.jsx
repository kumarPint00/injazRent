import {View, FlatList, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemCarAllDetails from '../../../../../components/list/ItemCarAllDetails/ItemCarAllDetails';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {getAllCarsByIdThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import colors from '../../../../../constants/colors';
import {moderateScale} from '../../../../../styles/responsiveSize';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import Loader from '../../../../../components/Loader/Loader';
import {useNavigation, useRoute} from '@react-navigation/native';
import routes from '../../../../../constants/routes';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const CarAllDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();
  const [isSelected, setIsSelected] = useState(0);
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const id = route?.params?.id;
  console.log(id, '...id of cars selected');
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data, '...res from categories thunk');
        const {
          category,
          engineCapacity,
          seater,
          transmission,
          laggageBootCapacity,
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
          securityDeposit,
          keyFeatures,
        } = res?.data?.data;
        console.log('Category:', category);
        console.log('Engine Capacity:', engineCapacity);
        console.log('Seater:', seater);
        console.log('Transmission:', transmission);
        console.log('Luggage Boot Capacity:', laggageBootCapacity);
        console.log('Key Features:', keyFeatures);
        const formattedKeyFeatures = keyFeatures.join('\n');
        setCarDetails({
          category,
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
          securityDeposit,
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          bounces={false}
          contentContainerStyle={{
            paddingBottom:
              carDetails.length > 0 ? moderateScale(150) : moderateScale(10),
            paddingTop:
              carDetails.length > 0 ? moderateScale(120) : moderateScale(20),
          }}
          showsVerticalScrollIndicator={false}
          data={[
            {name: 'Category', value: carDetails.category},

            {name: 'Transmission', value: carDetails.transmission},
            {name: 'Engine Capacity', value: carDetails.engineCapacity},
            {
              name: 'Luggage Boot Capacity',
              value: carDetails.laggageBootCapacity,
            },
            {name: 'Security Deposit', value: carDetails.securityDeposit},
            {name: 'Actual Price Daily', value: carDetails.actualPriceDaily},
            {
              name: 'Actual Price Monthly',
              value: carDetails.actualPriceMonthly,
            },
            {
              name: 'Actual Price Weekly',
              value: carDetails.actualPriceWeekly,
            },
            {name: 'CDW Daily', value: carDetails.cdwDaily},
            {name: 'CDW Weekly', value: carDetails.cdwWeekly},
            {name: 'CDW Monthly', value: carDetails.cdwMonthly},
            {
              name: 'PAI Insurance Daily',
              value: carDetails.paiInsuranceDaily,
            },
            {
              name: 'Baby Seat Charge Daily',
              value: carDetails.babySeatChargeDaily,
            },
            {
              name: 'Baby Seat Charge Weekly',
              value: carDetails.babySeatChargeWeekly,
            },
            {
              name: 'Baby Seat Charge Monthly',
              value: carDetails.babySeatChargeMonthly,
            },
            {
              name: 'Delivery Charge Daily',
              value: carDetails.deliveryChargeDaily,
            },
            {
              name: 'Delivery Charge Weekly',
              value: carDetails.deliveryChargeWeekly,
            },
            {
              name: 'Delivery Charge Monthly',
              value: carDetails.deliveryChargeMonthly,
            },
            {
              name: 'Security Deposit Service',
              value: carDetails.securityDeposit,
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ItemCarAllDetails
              item={item}
              index={index}
              isSelected={isSelected}
              setCarsDetails={setCarDetails}
            />
          )}
        />
      )}
      {/* {!isLoading && (
        <View style={styles.buttonContainer}>
          <ButtonComp
            // onPress={() =>
            //   navigation.navigate(routes.IDENTITY_VERIFICATION_SCREEN)
            // }
            activeOpacity={0.9}
            text={selectedLanguage === 'en' ? 'Okay Got it' : 'حسنا حصلت عليه'}
            textStyle={{color: colors.BLACK}}
            style={styles.buttonStyle}
          />
        </View>
      )} */}
    </ScrollView>
  );
};

export default CarAllDetails;
