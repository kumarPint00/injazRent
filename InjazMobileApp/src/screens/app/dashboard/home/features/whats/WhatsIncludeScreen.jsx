import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {WhatsIncData} from '../../../../../../constants/list';
import styles from './styles';
import ItemWhatsInclude from '../../../../../../components/list/ItemWhatsInclude/ItemWhatsInclude';
import ContractButton from '../../../../../../components/button/contractButton/ContractButton';

import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import colors from '../../../../../../constants/colors';
import fontFamily from '../../../../../../styles/fontFamily';
import InsuranceButton from '../../../../../../components/button/insuranceButton/InsuranceButton';
import MileageButton from '../../../../../../components/button/mileageButton/MileageButton';
import CheckBox from '../../../../../../components/checkBox/CheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getAllCarsByIdThunk,
  getAllCarsThunk,
} from '../../../../../../redux/asyncThunk/AsyncThunk';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';
import {
  selectCheckboxState,
  toggleCheckbox,
} from '../../../../../../redux/slices/checkbox_slice';

const WhatsIncludeScreen = () => {
  const routes = useRoute();
  const item = routes?.params?.selectedItem;
  const images = routes?.params?.images || [];
  const [carDetails, setCarsDetails] = useState({});
  const [services, setServices] = useState([]);
  const selectedLanguage = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const isChecked = useSelector(selectCheckboxState);
  const route = useRoute();
  const id = route.params.id;
  console.log(id, ',,,,,,id whats include');
  console.log(
    'Images from ItemPopularCars:',
    item?.image,
    item?.internalImage,
    item?.externalImage,
  );

  const handleCheckboxChange = () => {
    dispatch(toggleCheckbox()); // Dispatch toggleCheckbox action
  };

  useEffect(() => {
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        const {services, freeMonthlyKM} = res?.data?.data;
        setServices(services.map(service => ({id: service, name: service})));
        setCarsDetails({
          ...carDetails,
          freeMonthlyKM: freeMonthlyKM,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={services.slice(1)}
        numColumns={2}
        renderItem={({item, index}) => {
          const backgroundColor =
            index % 2 === 0 ? styles.yellowBackground : styles.purpleBackground;

          return (
            <ItemWhatsInclude
              item={item}
              index={index + 1}
              isLastItem={index === services.length - 2}
              customStyle={backgroundColor}
            />
          );
        }}
        keyExtractor={item => item.id}
      />

      <View style={styles.contractContainer}>
        <Text style={styles.titleContract}>
          {selectedLanguage === 'en' ? 'Contract' : 'عقد'}
        </Text>
      </View>

      <View style={styles.buttonRowContainer}>
        <View style={styles.buttonContainer}>
          <ContractButton
            activeOpacity={0.8}
            titleContract={selectedLanguage === 'en' ? 'Contract' : 'عقد'}
            label={selectedLanguage === 'en' ? 'Super Saver' : 'المنقذ الخارق'}
            title={selectedLanguage === 'en' ? '9 Months' : '9 أشهر'}
            subTitle={
              selectedLanguage === 'en'
                ? 'AED 1,390 / month'
                : '1,390 درهماً شهرياً'
            }
            smallTitle={
              selectedLanguage === 'en'
                ? 'Saved AED 540'
                : 'تم توفير 540 درهمًا إماراتيًا'
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <ContractButton
            activeOpacity={0.8}
            label={selectedLanguage === 'en' ? 'Most popular' : 'الأكثر شعبية'}
            title={selectedLanguage === 'en' ? '3 Months' : '3 اشهر'}
            subTitle={
              selectedLanguage === 'en'
                ? 'AED 1420 / month'
                : 'تم التوفير 90 درهم'
            }
            smallTitle={'Saved AED 90'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ContractButton
            activeOpacity={0.8}
            title={selectedLanguage === 'en' ? '1 month' : 'شهر واحد'}
            subTitle={
              selectedLanguage === 'en'
                ? 'AED 1450 / month'
                : '1450 درهماً شهرياً'
            }
            smallTitle={
              selectedLanguage === 'en' ? 'Free 1400Km' : '1400 كم مجانا'
            }
          />
        </View>
      </View>

      <View style={styles.insuranceContainer}>
        <MileageButton
          activeOpacity={0.8}
          title={selectedLanguage === 'en' ? 'Insurance' : 'تأمين'}
          subTitle={selectedLanguage === 'en' ? 'Learn more' : 'يتعلم أكثر'}
          buttonTitle={selectedLanguage === 'en' ? 'Basic' : 'أساسي'}
          buttonSubTitle={selectedLanguage === 'en' ? 'Standard' : 'معيار'}
        />
      </View>
      <View style={styles.mileageContainer}>
        <MileageButton
          activeOpacity={0.8}
          title={selectedLanguage === 'en' ? 'Mileage' : 'عدد الأميال'}
          subTitle={selectedLanguage === 'en' ? 'Learn more' : 'يتعلم أكثر'}
          buttonTitle={selectedLanguage === 'en' ? '2000 KM' : '2000 كم'}
          buttonSubTitle={`${carDetails.freeMonthlyKM} KM`}
          titleCurrency={
            selectedLanguage === 'en' ? '+AED 300/month' : '+300 درهم شهرياً'
          }
          titleNoAdd={
            selectedLanguage === 'en'
              ? 'No additional cost'
              : 'لا توجد تكلفة إضافية'
          }
        />
      </View>
      <View
        style={{
          marginTop: moderateScale(30),
          bottom: moderateScale(65),
          marginHorizontal: moderateScale(18),
        }}>
        <Text
          style={{
            right: moderateScale(20),
            color: colors.BLACK,
            fontSize: textScale(18),
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            textAlign: 'left',
          }}>
          {selectedLanguage === 'en' ? 'Add-on' : 'اضافه'}
        </Text>
        <View style={{marginTop: moderateScale(10), right: moderateScale(20)}}>
          <CheckBox
            title={
              selectedLanguage === 'en'
                ? 'Add 1 more Driver'
                : 'أضف سائقًا واحدًا آخر'
            }
            subTitle={
              selectedLanguage === 'en'
                ? '+AED 65 per month'
                : '+65 درهماً شهرياً'
            }
            selected={isChecked}
            onCheckboxChange={handleCheckboxChange}
          />
        </View>
      </View>
    </View>
  );
};

export default WhatsIncludeScreen;
