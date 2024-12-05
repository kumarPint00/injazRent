import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from './styles';
import colors from '../../../constants/colors';

const ItemSettings = ({
  item,
  index,
  settingsData,
  toggleValue,
  toggleSwitchHandler,
  selectedLanguage,
}) => {
  const getTitleMarginStart = () => {
    if (
      item.title === 'Terms & Conditions' ||
      item.title === 'Privacy Policy' ||
      item.title === 'Delete Account'
    ) {
      return 10;
    }
    return 0;
  };

  const handleItemPress = () => {
    // Example: Show alert when 'Notifications' item is pressed
    if (item.title.en === 'Notifications') {
      Alert.alert('Notification', 'We are working on notification');
    }
  };

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          {index !== 0 && (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: item.background},
              ]}>
              <Image source={item.image} style={styles.icon} />
            </View>
          )}

          <View style={styles.textContainer}>
            <View>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      index === settingsData.length - 1
                        ? colors.RED
                        : colors.BLACK,
                    marginLeft: getTitleMarginStart(),
                  },
                ]}>
                {selectedLanguage === 'en' ? item.title.en : item.title.ar}
              </Text>
              {index === 0 && item.sub_title && (
                <Text style={[styles.subText, {marginLeft: 10}]}>
                  {selectedLanguage === 'en'
                    ? item.sub_title.en
                    : item.sub_title.ar}
                </Text>
              )}
            </View>
            {index === 0 && (
              <ToggleSwitch
                isOn={toggleValue}
                onColor={colors.GREEN}
                offColor={colors.GREY_LIGHT}
                size="small"
                onToggle={toggleSwitchHandler}
                style={styles.toggleSwitchContainer}
              />
            )}
          </View>
          <Image source={item.right} style={styles.rightIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSettings;
