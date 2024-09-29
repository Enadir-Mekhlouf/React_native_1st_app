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
