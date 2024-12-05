import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';

const ContractButton = ({label, title, subTitle, smallTitle}) => {
  const hasLabel = label !== null && label !== undefined;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        {hasLabel && (
          <Pressable style={styles.labelContainer}>
            <Text style={styles.labelText}>{label}</Text>
          </Pressable>
        )}
        <Text style={[styles.mainText, !hasLabel && styles.mainTextNoLabel]}>
          {title}
        </Text>
        <Text style={[styles.subText, !hasLabel && styles.subTextNoLabel]}>
          {subTitle}
        </Text>
        <Text style={[styles.smallText, !hasLabel && styles.smallTextNoLabel]}>
          {smallTitle}
        </Text>
      </Pressable>
    </View>
  );
};

export default ContractButton;
