//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import styles from './styles';
const ButtonComp = ({
  onPress = () => {},
  text = '',
  textPrice = '',
  style = {},
  leftImg = null,
  rightImg = null,
  textStyle = {},
  isLoading = false,
  disabled,
  activeOpacity,
  imageStyle = {},
  textPriceStyle = {},
  selectable,
}) => {
  return (
    <Pressable
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={{...styles.container, ...style}}
      onPress={onPress}>
      {!!leftImg ? <Image source={leftImg} style={imageStyle} /> : <View />}

      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <View>
          <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
          {!!textPrice ? (
            <Text
              selectable={selectable}
              style={{...styles.textStyle, ...textPrice, ...textPriceStyle}}>
              {textPrice}
            </Text>
          ) : null}
        </View>
      )}
      {!!rightImg ? <Image source={rightImg} style={imageStyle} /> : <View />}

      <View />
    </Pressable>
  );
};

//make this component available to the app
export default ButtonComp;
