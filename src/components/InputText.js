import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const InputText = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.inputStyle}
      onChangeText={onChangeText}
      placeholderTextColor={'#EBF3E8'}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputStyle: {
    padding: 20,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 10,
    color: '#F5F7F8',
    fontWeight: 'bold',
    marginHorizontal: 20,
    backgroundColor: '#4F4A45',
  },
});
