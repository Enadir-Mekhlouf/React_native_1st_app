import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress, theme}) => {
  const themes = {
    primary: {
      backgroundColor: '#444444',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'black',
      borderWidth: 1,
    },
  };

  const selectedTheme = themes[theme] || themes.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: selectedTheme.backgroundColor},
        theme === 'secondary' && styles.secondaryButton,
      ]}>
      <Text style={{color: selectedTheme.color, fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default CustomButton;
