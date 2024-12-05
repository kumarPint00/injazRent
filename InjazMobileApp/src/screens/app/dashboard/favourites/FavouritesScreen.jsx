import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {moderateScale, textScale} from '../../../../styles/responsiveSize';
import {removeFromFavorites} from '../../../../redux/slices/favourites_slice';
import styles from './styles';
import ItemFavourites from '../../../../components/list/ltemFavourites/ItemFavourites';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import {useNavigation} from '@react-navigation/native';
import images from '../../../../constants/images';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import Toast from 'react-native-toast-message';
import fontFamily from '../../../../styles/fontFamily';
import colors from '../../../../constants/colors';
import routes from '../../../../constants/routes';

const FavouritesScreen = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleImageClick = (id, image) => {
    navigation.navigate(routes.CAR_DETAILS_SCREEN, {
      id: id,
      imageUri: image,
    });
  };

  const handleHeartIconClick = id => {
    dispatch(removeFromFavorites(id));
    Toast.show({
      type: 'error',
      text1: 'Removed From Favourites',
    });
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Favourites' : 'المفضلة'}
      />
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          contentContainerStyle={{marginHorizontal: moderateScale(10)}}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleImageClick(item.id, item.image)}>
              <ItemFavourites
                item={item}
                onHeartIconPress={handleHeartIconClick}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.WHITE,
          }}>
          <Text
            style={{
              fontSize: textScale(18),
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              color: colors.BLACK,
              marginBottom: moderateScale(20),
            }}>
            No Favourites Cars
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavouritesScreen;
