import {View, Text, FlatList, Platform} from 'react-native';
import React, {useState} from 'react';
import {termsData} from '../../../../../../constants/list';
import ItemTerms from '../../../../../../components/list/ItemTerms/ItemTerms';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import CheckBox from '../../../../../../components/checkBox/CheckBox';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from '../../../../../../components/button/ButtonComp/ButtonComp';
import colors from '../../../../../../constants/colors';
import routes from '../../../../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';

const TermsConditionsScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State to manage button enable/disable
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    setIsButtonEnabled(!isButtonEnabled); // Enable/disable button based on checkbox state
  };

  // Function to handle button press
  const handleButtonPress = () => {
    if (isButtonEnabled) {
      navigation.navigate(routes.BOOKING_ADDRESS_SCREEN);
    }
  };

  return (
    <View>
      <FlatList
        activeOpacity={0.9}
        showsVerticalScrollIndicator={false}
        data={termsData}
        contentContainerStyle={{
          paddingTop:
            Platform.OS === 'ios' ? moderateScale(200) : moderateScale(180),
          paddingBottom:
            termsData.length > 0 ? moderateScale(120) : moderateScale(0),
        }}
        renderItem={({item}) => {
          return <ItemTerms item={item} selectedLanguage={selectedLanguage} />;
        }}
      />
      <View
        style={{
          bottom:
            Platform.OS === 'android' ? moderateScale(180) : moderateScale(240),
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'center', // Corrected typo in justifyContent property
          alignItems: 'center',
        }}>
        <CheckBox
          selected={isChecked}
          onCheckboxChange={handleCheckboxChange} // Handle checkbox change
        />
        <ButtonComp
          onPress={handleButtonPress} // Handle button press
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Okay Got it' : 'حسنا حصلت عليه'}
          textStyle={{color: colors.WHITE, fontSize: textScale(16)}}
          style={{
            width: 200,
            backgroundColor: colors.BLACK,
            width: '88%',
          }}
          disabled={!isButtonEnabled} // Disable button if isButtonEnabled is false
        />
      </View>
    </View>
  );
};

export default TermsConditionsScreen;
