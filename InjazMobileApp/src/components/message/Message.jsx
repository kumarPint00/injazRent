import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library you choose

const Message = ({type, message}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!isVisible) {
    return null;
  }

  let backgroundColor;
  let icon;
  switch (type) {
    case 'error':
      backgroundColor = 'red';
      icon = 'times'; // Icon for error
      break;
    case 'success':
      backgroundColor = 'green';
      icon = 'check'; // Icon for success
      break;
    default:
      backgroundColor = 'black';
      icon = null;
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {icon && (
        <Icon name={icon} size={20} color={colors.WHITE} style={styles.icon} />
      )}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: moderateScale(30),
    alignSelf: 'center',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: colors.WHITE,
    fontSize: textScale(16),
  },
  icon: {
    marginRight: moderateScale(5),
  },
});

export default Message;
