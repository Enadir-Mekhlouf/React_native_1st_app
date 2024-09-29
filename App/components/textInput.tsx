import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: any) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#888"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 320, //TODO: change width to percentage
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
  },
});

export default CustomTextInput;
