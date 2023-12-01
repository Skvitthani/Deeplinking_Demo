import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputText = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.inputStyle}
      placeholderTextColor={'#EBF3E8'}
      onChangeText={onChangeText}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 10,
    color: '#F5F7F8',
    fontWeight: 'bold',
    marginHorizontal: 20,
    backgroundColor: '#4F4A45',
  },
});
