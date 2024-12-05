import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const DropdownMode = ({
  options,
  selectedOption,
  onSelect,
  leftImgSrc,
  rightImgSrc,
  style,
  errorMessage,
  selectedLanguage,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectOption = option => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View
      style={{
        position: 'relative',
        zIndex: 1,
        flexDirection: 'row',
        padding: 10,
        top: moderateScale(5),
        alignItems: 'center',
        borderBottomColor: colors.GREY_SECONDAY,
        borderBottomWidth: 0.2,
        ...style,
      }}>
      {!!leftImgSrc && (
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={leftImgSrc}
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              marginRight: 5,
            }}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={{flex: 1}} onPress={toggleDropdown}>
        <Text style={{marginStart: moderateScale(4), color: colors.BLACK}}>
          {selectedOption}
        </Text>
      </TouchableOpacity>
      {!!rightImgSrc && (
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={rightImgSrc}
            style={{
              width: moderateScale(14),
              height: moderateScale(14),
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      )}
      {isVisible && (
        <View
          style={{
            position: 'absolute',
            top: moderateScale(35),
            left: 0,
            right: 0,
            backgroundColor: 'white',
            zIndex: 2,
            ...Platform.select({
              ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                margin: moderateScale(3),
              },
              android: {
                elevation: 5,
              },
            }),
          }}>
          <FlatList
            data={options}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => handleSelectOption(item)}>
                <Text
                  style={{
                    marginStart: moderateScale(4),
                    padding: moderateScale(10),
                    color: index == 0 ? colors.GREY_SECONDAY : colors.BLACK,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.toString()}
          />
        </View>
      )}
      {errorMessage && (
        <View style={{position: 'absolute', top: moderateScale(40)}}>
          <Text style={{color: 'red', marginTop: 5, marginLeft: 5}}>
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropdownMode;
