import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../../constants/colors';
import {useDispatch} from 'react-redux';
import {deleteDocumentImageByIdThunk} from '../../../redux/asyncThunk/AsyncThunk';
import Toast from 'react-native-toast-message';

const ItemResident = ({item, onEdit, onDelete}) => {
  console.log(item?._id, '........delete by resident');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    try {
      dispatch(deleteDocumentImageByIdThunk({id: item?._id}));
      setIsLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Image deleted successfully',
      });
      onDelete();
    } catch (error) {
      console.error('Error deleting image:', error);
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: error.message || 'Failed to delete image',
      });
    }
  };

  // Replace HTTP with HTTPS for the image URL
  const imageUrl = item?.url ? item.url.replace(/^http:\/\//i, 'https://') : '';

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: imageUrl}}
        style={styles.image}
      />
      <View style={{justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => onEdit(item?._id)}>
          <Image
            source={require('../../../assets/images/editIcon.png')}
            style={{
              width: 20,
              height: 20,
              marginEnd: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete()}>
          <Image
            source={require('../../../assets/images/trash.png')}
            style={{
              width: 20,
              height: 20,
              marginEnd: 10,
              tintColor: colors.RED,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemResident;
