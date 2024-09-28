import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux';
import SignIN from './App/Screens/SignIn';
import SignUP from './App/Screens/SignUp';
import Home from './App/Screens/Home';
import ProductDetail from './App/Screens/ProductDetail';


const Stack = createNativeStackNavigator();

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


const App = ({})=> {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIN} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />

    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default App
