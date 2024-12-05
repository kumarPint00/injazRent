import {View, FlatList, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemCarAllDetails from '../../../../../components/list/ItemCarAllDetails/ItemCarAllDetails';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {
  getAllCarsByIdThunk,
  getAllCarsThunk,
} from '../../../../../redux/asyncThunk/AsyncThunk';
import colors from '../../../../../constants/colors';
import {moderateScale} from '../../../../../styles/responsiveSize';
import ItemCarRequirement from '../../../../../components/list/ItemCarRequireMent/ItemCarRequireMent';
import Loader from '../../../../../components/Loader/Loader';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import {useNavigation, useRoute} from '@react-navigation/native';
import routes from '../../../../../constants/routes';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const CarRequireMentScreen = () => {
  const [carDetails, setCarsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(0);
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route?.params?.id;
  console.log(id, '.....id car requirement');
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        const {requirementsForUAEResidents, requirementsForTourists, services} =
          res?.data?.data;

        const securityDepositIndex = services.findIndex(service =>
          service.includes('Security deposit refunded in 21 days'),
        );
        const securityDepositService =
          securityDepositIndex !== -1 ? services[securityDepositIndex] : null;
        console.log('Security Deposit Service:', securityDepositService);
        setCarsDetails({
          requirementsForUAEResidents,
          requirementsForTourists,
          services,
        });
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <View contentContainerStyle={styles.contentContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          bounces={false}
          contentContainerStyle={{
            height:
              Platform.OS == 'android'
                ? Dimensions.get('window').height / 1.4
                : Dimensions.get('window').height / 1.5,
            paddingBottom:
              carDetails.length > 0 ? moderateScale(150) : moderateScale(20),
          }}
          showsVerticalScrollIndicator={false}
          data={[
            {
              name: 'Requirements (for UAE Residents)',
              value: carDetails.requirementsForUAEResidents,
            },
            {
              name: 'Requirements (for Tourists)',
              value: carDetails.requirementsForTourists,
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ItemCarRequirement
              item={item}
              index={index}
              isSelected={isSelected}
              setCarsDetails={setCarsDetails}
            />
          )}
        />
      )}
      {/* {!isLoading && (
        <View style={styles.buttonContainer}>
          <ButtonComp
            // onPress={() => navigation.navigate(routes.REVIEW_BOOKING_SCREEN)}
            activeOpacity={0.9}
            text={selectedLanguage === 'en' ? 'Okay, got it' : 'حسنا حصلت عليه'}
            textStyle={{color: colors.BLACK}}
            style={styles.buttonStyle}
          />
        </View>
      )} */}
    </View>
  );
};

export default CarRequireMentScreen;
