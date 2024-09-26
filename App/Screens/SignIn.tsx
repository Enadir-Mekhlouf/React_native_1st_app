import React from 'react';
import {Alert, Button, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const HelloWorldApp = () => {
  const [text, onChangeText] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return (
    <>
    <View style={{backgroundColor:'red'}}> 
      <Text style={{marginLeft: 12,fontSize:30,color:'#050505'}}>Welcome Back !</Text>
      </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center', 
        padding: 5,
        backgroundColor:'yellow'
      }}>
      
      <View>
        <Text style={{marginLeft: 12,color:'#050505'}}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <Text style={{marginLeft: 12,color:'#050505'}}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      
      <View style={styles.centeredView}> 
        <View style={{padding: 5,width:300}}>
        <TouchableOpacity 
          style={styles.buttonStart}
          onPress={() => Alert.alert('Start button pressed')}>
          <Text style={styles.buttonTextStart}>Start</Text>
        </TouchableOpacity>
        </View>

        <View style={{padding: 5,width:300}}>
         <TouchableOpacity 
          style={styles.button}
          onPress={() => Alert.alert('Sign In button pressed')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        </View>

       
      </View>

    </View>
    </>
    
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
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

export default HelloWorldApp;




    