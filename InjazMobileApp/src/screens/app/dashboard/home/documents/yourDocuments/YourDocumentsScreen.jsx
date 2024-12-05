import {View, Text, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {yourDocuments} from '../../../../../../constants/list';
import ItemYourDocuments from '../../../../../../components/list/ItemYourDocuments/ItemYourDocuments';
import styles from './styles';
import ButtonComp from '../../../../../../components/button/ButtonComp/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';

const YourDocumentsScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  return (
    <View style={{flexGrow: 1}}>
      <FlatList
        data={yourDocuments}
        renderItem={({item}) => {
          return (
            <ItemYourDocuments
              item={item}
              selectedLanguage={selectedLanguage}
            />
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <ButtonComp
          onPress={() => navigation.navigate(routes.BOOKING_DETAILS_SCREEN)}
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Continue' : 'متابعة'}
          textStyle={styles.buttonTitle}
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default YourDocumentsScreen;
