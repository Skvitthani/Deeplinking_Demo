import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonConst = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonConst;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#557C55',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: '500',
  },
});
