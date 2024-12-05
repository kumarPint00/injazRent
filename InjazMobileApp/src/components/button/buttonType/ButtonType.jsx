import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  View,
  Pressable,
} from 'react-native';
import styles from './styles';

const ButtonType = ({
  onPress = () => {},
  text = '',
  style = {},
  leftImg = null,
  textStyle = {},
  isLoading = false,
  buttonDisabled,
  titleNoAdd,
  titleCurrency,
}) => {
  return (
    <Pressable
      disabled={buttonDisabled}
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={0.7}>
      {!!leftImg ? <Image source={leftImg} /> : <View />}

      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
            {titleNoAdd && <Text style={styles.titleNoAdd}>{titleNoAdd}</Text>}
            {titleCurrency && (
              <Text style={styles.titleCurrency}>{titleCurrency}</Text>
            )}
          </View>
        </>
      )}

      <View />
    </Pressable>
  );
};

export default ButtonType;
