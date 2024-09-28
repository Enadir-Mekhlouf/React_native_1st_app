import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry = false }:any) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 320,
      marginBottom:10,
      marginTop:10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#eeeeee',
    },
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  
  
  buttonStart: {
      backgroundColor: '#444444',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      
    },
    buttonTextStart: {
      color: 'white',
      fontSize: 16,
    },
  
  
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      borderColor:'black',
      borderWidth:1
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
  
  
  });

export default CustomTextInput;
