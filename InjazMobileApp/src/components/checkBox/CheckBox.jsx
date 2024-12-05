import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../constants/images';
import styles from './styles';
import colors from '../../constants/colors';
const CheckBox = ({
  title,
  subTitle,
  selected,
  onCheckboxChange,
  isCheckBoxTrue,
}) => {
  console.log(title, '......title');
  console.log(isCheckBoxTrue, '.....rest');
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          {
            backgroundColor: selected ? colors.WHITE : null,
            borderColor: selected ? colors.BLACK : colors.BLACK,
          },
        ]}
        onPress={e => onCheckboxChange(e)}
        activeOpacity={0.8}>
        {selected ? (
          <Image
            resizeMode="contain"
            source={images.CHECKED}
            style={styles.imageCheck}
          />
        ) : null}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {!!title ? <Text style={styles.title}>{title}</Text> : null}
        {!!subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
      </View>
    </View>
  );
};
export default CheckBox;
