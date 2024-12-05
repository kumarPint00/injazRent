// PickerModal.js

import React from 'react';
import {View, Modal, TouchableOpacity, Image, Text} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../../../constants/colors';
import styles from './styles';
import {
  androidCameraPermission,
  androidGalleryPermission,
} from '../../../utils/permissions';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const PickerModal = props => {
  const {
    visible,
    onCancel,
    setSelectedImage,
    setSelectedImageFromGallery,
    setSelectedImageFromCamera,
  } = props;

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'ios') {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setSelectedImage(image.path);
        setSelectedImageFromCamera(image.path);
        onCancel();
      });
    }
  };

  const onGallery = async () => {
    try {
      const granted = await androidGalleryPermission();
      if (granted) {
        const res = await ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        });
        setSelectedImage(res.path);
        setSelectedImageFromGallery(res.path);
        onCancel();
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Modal
      onRequestClose={onCancel}
      visible={visible}
      transparent={true}
      animationType="slide">
      <TouchableOpacity
        onPress={onCancel}
        style={styles.modalInnerView}
        onPressIn={onCancel}>
        <View style={styles.modalImageContainer}>
          <Text
            style={{
              color: colors.BLACK,
              alignSelf: 'center',
              bottom: moderateScale(20),
              fontSize: textScale(18),
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            Choose your image from
          </Text>
          <TouchableOpacity onPress={onCancel} style={styles.btnCancel}>
            <Image
              resizeMode="contain"
              style={styles.imageCancel}
              source={props.imageCancel}
            />
          </TouchableOpacity>
          <View style={styles.cameraContainer}>
            <TouchableOpacity style={styles.btnCamera} onPress={onSelectImage}>
              <Image
                resizeMode="contain"
                style={styles.imageCamera}
                source={props.imageCamera}
              />
              <View style={{marginHorizontal: 6}}></View>
              <Text style={styles.cameraText}>{props.camera}</Text>
            </TouchableOpacity>
            <View style={{marginVertical: 4}}></View>
            <TouchableOpacity style={styles.gallerybtn} onPress={onGallery}>
              <Image
                tintColor={colors.BLACK}
                resizeMode="contain"
                style={styles.galleryImage}
                source={props.imageGallery}
              />
              <View style={{marginHorizontal: 5}}></View>
              <Text style={styles.galleryText}>{props.gallery}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PickerModal;
