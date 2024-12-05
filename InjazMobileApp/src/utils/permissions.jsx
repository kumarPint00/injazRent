import {PermissionsAndroid, Platform} from 'react-native';

export const androidCameraPermission = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
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

      const galleryPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (galleryPermission !== 'granted') {
        console.error(
          'Gallery permission not granted. Please allow permissions.',
        );
        return false;
      }

      return true;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const androidGalleryPermission = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      const galleryPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (galleryPermission !== 'granted') {
        console.error(
          'Gallery permission not granted. Please allow permissions.',
        );
        return false;
      }

      return true;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
