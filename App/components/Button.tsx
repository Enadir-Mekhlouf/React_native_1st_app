import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor = '#007bff', color = '#fff' }:any) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
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

export default CustomButton;
