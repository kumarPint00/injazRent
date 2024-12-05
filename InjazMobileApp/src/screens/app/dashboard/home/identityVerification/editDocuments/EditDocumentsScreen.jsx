import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeaderCategory from '../../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';
import ButtonComp from '../../../../../../components/button/ButtonComp/ButtonComp';
import styles from './styles';
import {moderateScale} from '../../../../../../styles/responsiveSize';
import Loader from '../../../../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {updateDocumentByIdThunk} from '../../../../../../redux/asyncThunk/AsyncThunk';
import PickerModal from '../../../../../../components/modal/pickerModal/PickerModal';
import mime from 'mime';

const EditDocumentsScreen = () => {
  const route = useRoute();
  const selectedDocsImage = route.params.selectedImage;
  const id = route.params.id;
  console.log(id, '.......id of edit doc screen');
  const [selectedImage, setSelectedImage] = useState(selectedDocsImage);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFile, setImageFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedImageFromCamera, setSelectedImageFromCamera] = useState('');
  console.log(selectedImageFromCamera, '......selected camera');
  const [selectedImageFromGallery, setSelectedImageFromGallery] = useState('');
  console.log(selectedImageFromGallery, '......selected gallery');
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const setImage = imagePath => {
    setSelectedImage(imagePath);
    setSelectedImageFromCamera(imagePath);
    setSelectedImageFromGallery(imagePath);
  };

  const selectedImageUri =
    selectedImageFromCamera || selectedImageFromGallery || selectedDocsImage;

  const handleUpdate = async () => {
    setIsLoading(true);
    const formData = new FormData();

    if (selectedImageUri !== '') {
      const mimeType = mime.getType(selectedImageUri);
      const fileName = selectedImageUri.split('/').pop();
      console.log(fileName, '......fileName');
      formData.append('documentImages', {
        uri: selectedImageUri,
        type: mimeType,
        name: fileName,
      });
    }
    try {
      await dispatch(
        updateDocumentByIdThunk({
          id: id,
          selectedImageUri: selectedImageUri.replace(/^http:\/\//i, 'https://'),
        }),
      )
        .then(
          res => console.log(res),
          Toast.show({
            type: 'success',
            text1: 'Documents updated successfully',
          }),
        )
        .catch(err => console.log(err));

      setIsLoading(false);
    } catch (error) {
      console.log('Failed to update profile:', error);
      setIsLoading(false);
    }
  };
  return (
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

      <View style={styles.imageViewStyle}>
        {selectedImageUri && (
          <Image
            resizeMode="contain"
            source={{uri: selectedImageUri.replace(/^http:\/\//i, 'https://')}} // Replace HTTP with HTTPS
            style={{width: moderateScale(430), height: moderateScale(200)}}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComp
          onPress={() => {
            setModalVisible(true);
          }}
          text={selectedLanguage === 'en' ? 'Choose Photos' : 'اختر الصور'}
          textStyle={styles.buttonTitleStyle}
          style={styles.buttonStyle}
        />
        <ButtonComp
          onPress={() => {
            handleUpdate();
          }}
          text={selectedLanguage === 'en' ? 'Update' : 'اختر الصور'}
          textStyle={styles.buttonUpdateTitleStyle}
          style={styles.buttonUpdateStyle}
        />
      </View>
      <PickerModal
        setImageCallback={setImage}
        selectedImage={selectedImage}
        setImageFile={setImageFile}
        setSelectedImageFromCamera={setSelectedImageFromCamera}
        setSelectedImageFromGallery={setSelectedImageFromCamera}
        setSelectedImage={setSelectedImage}
        imageCancel={images.CLOSEE}
        imageCamera={images.CAMERAA}
        imageGallery={images.GALLERY}
        visible={modalVisible}
        onCancel={hideModal}
        camera={'Camera'}
        gallery={'Gallery'}
        onRequestClose={() => hideModal()}
      />
    </View>
  );
};

export default EditDocumentsScreen;
