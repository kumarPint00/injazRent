import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native'; // Import I18nManager
import styles from './styles';
import {profileData} from '../../../../constants/list';
import ItemProfile from '../../../../components/list/ItemProfile/ItemProfile';
import images from '../../../../constants/images';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import routes from '../../../../constants/routes';
import {useDispatch, useSelector} from 'react-redux';
import LanguageModal from '../../../../components/modal/languageModal/LanguageModal';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import {moderateScale} from '../../../../styles/responsiveSize';
import {
  getUserByIdThunk,
  logOutThunk,
} from '../../../../redux/asyncThunk/AsyncThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../../components/Loader/Loader';
import {resetAuthState} from '../../../../redux/slices/auth_slices';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  console.log(fullName, '......fullName of user');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [id, setId] = useState('');
  const handleLanguagePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectLanguage = language => {
    console.log('Selected Language:', language);
    closeModal();
  };
  useEffect(() => {
    const userInfo = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, '......userId of profile');
        if (userId) {
          setId(userId);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    userInfo();
  }, [focused]);

  const handlePrivacy = () => {
    const url = 'https://sites.google.com/view/injaz-rental/home';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
  const handleLogout = () => {
    dispatch(resetAuthState());
    navigation.navigate(routes.INITIAL_SCREEN);
  };

  useEffect(() => {
    getUserInfoById();
  }, [focused]);

  const getUserInfoById = () => {
    setIsLoading(true);
    dispatch(getUserByIdThunk({id: id}))
      .unwrap()
      .then(apiResponse => {
        if (apiResponse && apiResponse.success) {
          const {fullName, email, contactInformation} = apiResponse.data;
          console.log(fullName, '.....fullName');
          setFullName(fullName);
          setEmail(email);
          setContact(contactInformation);
        } else {
          console.log('User details not found.');
        }
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoWrapper}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
              }}
              style={styles.profileImage}
            />
            {/* <View style={styles.userInfoTextWrapper}>
              <Text style={styles.username}>{fullName}</Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View> */}
          </View>
          {/* <View style={styles.editButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(routes.EDIT_PROFILE_SCREEN)}
              style={styles.editButtonWrapper}>
              <Image source={images.EDIT} style={styles.editButtonImage} />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>

      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={profileData}
          contentContainerStyle={{
            paddingBottom:
              Platform.OS === 'android' ? moderateScale(90) : moderateScale(80),
          }}
          renderItem={({item, index}) => {
            const handleNavigation = () => {
              switch (item.id) {
                case '1':
                  navigation.navigate(routes.DOCUMENT_UPLOAD_SCREEN);
                  break;
                case '2':
                  handleLanguagePress();
                  break;
                case '3':
                  navigation.navigate(routes.FAVOURITE_SCREEN);
                  break;
                case '4':
                  navigation.navigate(routes.INVITE_FREINDS_SCREEN);
                  break;
                // case '5':
                //   navigation.navigate(routes.ADDRESS_SCREEN);
                //   break;
                case '5':
                  handlePrivacy();
                  break;
                case '6':
                  handleLogout();
                  break;
                default:
              }
            };
            return (
              <View>
                <TouchableOpacity onPress={handleNavigation}>
                  <ItemProfile
                    item={item}
                    index={index}
                    profileData={profileData}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0</Text>
        </View>
      </>
      <LanguageModal
        visible={modalVisible}
        onClose={closeModal}
        onSelectLanguage={handleSelectLanguage}
      />
    </View>
  );
};

export default ProfileScreen;
