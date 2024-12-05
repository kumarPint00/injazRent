import {View, FlatList, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';
import ButtonComp from '../../../../../../components/button/ButtonComp/ButtonComp';
import {getAllDocumentsThunk} from '../../../../../../redux/asyncThunk/AsyncThunk';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import Loader from '../../../../../../components/Loader/Loader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import routes from '../../../../../../constants/routes';
import fontFamily from '../../../../../../styles/fontFamily';
import colors from '../../../../../../constants/colors';
import ItemNonResident from '../../../../../../components/list/ItemNonResident/ItemNonResident';
import ListHeader from '../resident/ListHeader';

const NonResidentScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const focused = useIsFocused();
  useEffect(() => {
    getAllDocuments();
  }, [focused]);

  const handleEdit = item => {
    navigation.navigate(routes.EDIT_DOCUMENTS_SCREEN, {
      selectedImage: item.url,
      id: item?._id,
    });
  };

  const getAllDocuments = () => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(getAllDocumentsThunk())
        .unwrap()
        .then(apiResponse => {
          console.log(apiResponse, '.......response documents');
          if (Array.isArray(apiResponse) && apiResponse.length > 0) {
            setDocuments(apiResponse);
          } else {
            console.log('No documents available.');
          }
        })
        .catch(error => {
          console.error('Error fetching documents:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };
  const handleDeleteSuccess = () => {
    getAllDocuments();
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      {documents.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              fontSize: textScale(16),
              color: colors.BLACK,
            }}>
            No Documents Available
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            documents.length > 0
              ? {paddingBottom: moderateScale(80)}
              : {paddingBottom: moderateScale(20)}
          }
          ListHeaderComponent={() => (
            <ListHeader
              onPress={() => {
                navigation.navigate(routes.EDIT_DOCUMENTS_SCREEN);
              }}
            />
          )}
          data={documents}
          renderItem={({item}) => (
            <ItemNonResident
              item={item}
              selectedLanguage={selectedLanguage}
              onEdit={() => handleEdit(item)}
              onDelete={handleDeleteSuccess}
            />
          )}
        />
      )}
      {/* <View style={styles.buttonContainer}>
        <ButtonComp
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Cancel' : 'يلغي'}
          textStyle={styles.buttonTextClear}
          style={styles.buttonClear}
          onPress={() => {}}
        />
        <ButtonComp
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Continue' : 'يكمل'}
          textStyle={styles.buttonTextApply}
          style={styles.buttonApply}
          onPress={() => {}}
        />
      </View> */}
    </View>
  );
};

export default NonResidentScreen;
