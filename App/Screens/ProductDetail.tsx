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
import CustomButton from '../components/Button';

const ProductDetail = ({route, navigation}: any) => {
  const {id, name, imageUri, CodeBar, price, description} = route.params;

  // const {name, imageUri, CodeBar, price, description} = useSelector(
  //   (state: any) => state.items.items.filter(i => i.id == id)[0],
  // );
  const [Modalvisible, SetModalvisible] = React.useState(false);
  const dispatch = useDispatch();
  console.log(typeof imageUri, imageUri);

  const toggleModalVisible = () => {
    SetModalvisible(!Modalvisible);
  };

  const handleDelete = () => {
    dispatch(removeitem(id));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', width: '100%'}}>
      <View style={{alignItems: 'center', width: '100%'}}>
        <Image source={imageUri} style={{width: '100%', height: '60%'}} />
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          height: '65%',
          position: 'absolute',
          zIndex: 1,
          top: '35%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            paddingLeft: 15,
            paddingBottom: 20,
            padding: 30,
          }}>
          <Text style={{fontSize: 25, color: '#050505', paddingBottom: 20}}>
            Label {name}
          </Text>
          <Text style={{fontSize: 20, color: '#050505', paddingBottom: 20}}>
            Price {price}{' '}
          </Text>
          <Text style={{paddingBottom: 20}}>description :{description} </Text>
          <Text style={{fontSize: 20, color: '#050505'}}>
            Code Bar {CodeBar}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          }}>
          <View style={{padding: 5, width: 300}}>
            <CustomButton
              title={'Edit'}
              onPress={toggleModalVisible}
              theme={'primary'}
            />
          </View>
          <View style={{padding: 5, width: 300}}>
            <CustomButton
              title={'Delete'}
              onPress={() => handleDelete()}
              theme={'secondary'}
            />
          </View>
        </View>
      </View>

      <ProductModal
        visible={Modalvisible}
        onClose={toggleModalVisible}
        animationType={'slide'}
        mode={'edit'}
        item={{name, price, description, CodeBar, id, imageUri: imageUri.uri}}
      />
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

export default ProductDetail;
