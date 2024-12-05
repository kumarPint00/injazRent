import React from 'react';
import {View, TouchableOpacity, Text, FlatList, Pressable} from 'react-native';
import FlatlistImages from '../flatlistImages/FlatlistImages';
import styles from './styles';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const ItemWhatsInclude = ({item, isLastItem, customStyle, index}) => {
  console.log('ItemWhatsInclude - item:', item);
  console.log(index, '...index');
  return (
    <View
      style={[styles.itemContainer, isLastItem ? styles.lastItemMargin : null]}>
      <Pressable
        activeOpacity={0.9}
        style={[styles.touchableOpacity, customStyle]}>
        <FlatlistImages title={item.title} />
        {isLastItem && (
          <View>
            {item.services &&
              item.services.map((service, index) => (
                <Text key={index} style={styles.serviceItem}>
                  {service}
                </Text>
              ))}
          </View>
        )}
        <Text
          style={{
            bottom: moderateScale(20),
            fontFamily: fontFamily.POPPINS_MEDIUM,
            color: colors.WHITE,
            fontSize: textScale(14),
          }}>
          <Text>{item.name}</Text>
        </Text>
      </Pressable>
    </View>
  );
};
export default ItemWhatsInclude;
