import {View, PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderCategory from '../../../../../../components/header/headerCat/HeaderCategory';
import styles from './styles';
import images from '../../../../../../constants/images';
import DocumentItem from '../../../../../../components/documentItem/DocumentItem';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ButtonComp from '../../../../../../components/button/ButtonComp/ButtonComp';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';
import Loader from '../../../../../../components/Loader/Loader';
import {androidCameraPermission} from '../../../../../../utils/permissions';
import ImagePicker from 'react-native-image-crop-picker';
import {createDocumentThunk} from '../../../../../../redux/asyncThunk/AsyncThunk';
import Toast from 'react-native-toast-message';
import routes from '../../../../../../constants/routes';
import {moderateScale} from '../../../../../../styles/responsiveSize';

const DocumentsUploadScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const [selectedImageCamera, setSelectedImageCamera] = useState('');
  const [selectedImageGallery, setSelectedImageGallery] = useState('');
  const [imageFile, setImageFile] = useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelectedImageGallery('');
      setSelectedImageCamera('');
    });

    return unsubscribe;
  }, [navigation]);

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      onCamera();
    }
  };

  const onGallery = async () => {
    setIsLoading(true);
    try {
      const granted = await androidCameraPermission();
      if (granted) {
        const galleryPermissionStatus = await androidGalleryPermission();
        if (galleryPermissionStatus) {
          const res = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          });

          const fileName = res.path.split('/').pop();
          console.log('Gallery Image Path:', res.path);
          const image = {
            uri: res?.path,
            type: res?.mime,
            name: fileName,
          };

          setImageFile(image);
          setSelectedImageGallery(res?.path);
          setIsLoading(false);
        } else {
          console.warn('Gallery permission denied');
          setIsLoading(false);
        }
      } else {
        console.warn('Camera permission denied');
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'User canceled image selection',
      });
      setIsLoading(false);
    }
  };

  const androidGalleryPermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version > 22) {
        const permissions = [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ];
        const granted = await PermissionsAndroid.requestMultiple(permissions);
        for (const permission in granted) {
          if (granted[permission] !== 'granted') {
            console.error(
              `Permission ${permission} not granted. Please allow permissions.`,
            );
            return false;
          }
        }
        return true;
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleCreateDocument = async () => {
    setIsLoading(true);
    if (!imageFile) {
      Toast.show({
        type: 'error',
        text1: 'Please select an image from camera or gallery',
      });

      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('documentImages', imageFile);
    try {
      const response = dispatch(createDocumentThunk(formData));
      if (
        response &&
        response.data &&
        response.data.message === 'Image uploaded successfully'
      ) {
        Toast.show({
          type: 'success',
          text1: response.data.message,
        });

        setIsLoading(false);
        navigation.navigate(routes.RESIDENT);
      } else {
        Toast.show({
          type: 'success',
          text1: 'Image uploaded successfully',
        });
        setIsLoading(false);

        navigation.navigate(routes.RESIDENT);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Toast.show({
          type: 'error',
          text1: error.response.data.message,
        });
      } else if (error.response && error.response.status === 401) {
        Toast.show({
          type: 'error',
          text1: error.response.data.message,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const onCamera = async () => {
    setIsLoading(true);
    try {
      const granted = await androidCameraPermission();
      if (granted) {
        const res = await ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        });
        console.log('Camera Image Path:', res.path);
        if (!res?.path) {
          Toast.show({
            type: 'error',
            text1: 'User cancelled selection',
          });
          setIsLoading(false);
          return;
        }
        const fileName = res.path.split('/').pop();
        const image = {
          uri: res?.path,
          type: res?.mime,
          name: fileName,
        };
        setIsLoading(false);
        setImageFile(image);
        setSelectedImageCamera(res?.path);
      } else {
        console.warn('Camera permission denied');
        setIsLoading(false);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'User canceled image selection',
      });
      console.warn(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {isLoading && <Loader visible={isLoading} />}
        <HeaderCategory
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          backIcon={images.ARROW_LEFT}
          title={
            selectedLanguage === 'en'
              ? 'Identity Verification'
              : 'التحقق من الهوية'
          }
        />
        <View style={styles.containerStyle}>
          <View style={styles.backgroundContainer}>
            <DocumentItem
              onPress={() => {
                onSelectImage();
              }}
              source={
                selectedImageCamera ? {uri: selectedImageCamera} : images.CAMERA
              }
              activeOpacity={0.9}
              title={selectedLanguage === 'en' ? 'Camera' : 'مسح'}
              subtitle={
                selectedLanguage === 'en'
                  ? 'Select From Camera'
                  : 'حدد من الكاميرا'
              }
              imageWidth={
                selectedImageGallery ? moderateScale(40) : moderateScale(40)
              }
              imageHeight={
                selectedImageGallery ? moderateScale(40) : moderateScale(40)
              }
            />
            <View style={styles.dividerStyle} />
            <DocumentItem
              onPress={() => {
                onGallery();
              }}
              source={
                selectedImageGallery
                  ? {uri: selectedImageGallery}
                  : images.UPLOAD
              }
              activeOpacity={0.9}
              title={selectedLanguage === 'en' ? 'Upload' : 'تحميل'}
              subtitle={
                selectedLanguage === 'en'
                  ? 'Select From Gallery'
                  : 'حدد من المعرض'
              }
              imageWidth={
                selectedImageGallery ? moderateScale(40) : moderateScale(40)
              }
              imageHeight={
                selectedImageGallery ? moderateScale(40) : moderateScale(40)
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComp
            onPress={() => handleCreateDocument()}
            activeOpacity={0.9}
            text={selectedLanguage === 'en' ? 'Continue' : 'متابعة'}
            textStyle={styles.buttonTitleStyle}
            style={styles.buttonStyle}
          />
        </View>
      </View>
    </>
  );
};

export default DocumentsUploadScreen;
