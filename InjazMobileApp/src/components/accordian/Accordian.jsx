import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images from '../../constants/images';

const Accordion = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Image source={images.PLUS} style={styles.imageStyle} />
        </View>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};
export default Accordion;
