import React, {useEffect} from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PicturesItems from '../../App/components/PicturesItems';
import {useRoute} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import store from '../../redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {additem, removeitem, updateitem} from '../../redux/ItemSlice';
import ProductModal from './ProductModal';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/Button';

const SignIN = ({navigation}: any) => {
  const [text, onChangeText] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          flex: 1,
          paddingBottom: '20%',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View style={{width: '80%'}}>
          <View style={{alignSelf: 'flex-start', paddingBottom: '20%'}}>
            <Text style={{fontSize: 30, color: '#050505'}}>Welcome Back !</Text>
          </View>
          <View>
            <Text style={{color: '#050505'}}>Username</Text>
            <CustomTextInput
              value={text}
              onChangeText={onChangeText}
              placeholder={'Username'}
              secureTextEntry={false}
            />
          </View>
          <View style={{paddingBottom: '20%'}}>
            <Text style={{color: '#050505'}}>Password</Text>

            <CustomTextInput
              value={Password}
              onChangeText={onChangePassword}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.centeredView}>
          <View style={{padding: 5, width: 300}}>
            <CustomButton
              title={'Start'}
              onPress={() => navigation.navigate('SignUp')}
              theme={'primary'}
            />
          </View>

          <View style={{padding: 5, width: 300}}>
            <CustomButton
              title={'Sign In'}
              onPress={() => Alert.alert('Sign In button pressed')}
              theme={'secondary'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 320,
    marginBottom: 10,
    marginTop: 10,
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
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
export default SignIN;
