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

const Home = ({navigation}: any) => {
  const [Modalvisible, SetModalvisible] = React.useState(false);
  const toggleModalVisible = () => {
    SetModalvisible(!Modalvisible);
  };

  const shomedata = () => {};
  useEffect(() => {
    shomedata();
  }, []);

  const products = useSelector(state => state.items.items); // Access the products array from Redux store

  return (
    <SafeAreaView style={{flex: 1, padding: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{paddingTop: '10%', paddingHorizontal: 30}}>
          <Text style={{fontSize: 20, color: '#050505'}}>Hello Username !</Text>
        </View>
        <View>
          {products.map(product => (
            <PicturesItems
              key={product.id}
              navigation={navigation}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              CodeBar={product.CodeBar}
              imageUri={{uri: product.imageUri}}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 10,
          borderRadius: 100,
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={toggleModalVisible}>
        <MaterialIcons name="add-circle" color={'#4f4f4f'} size={70} />
      </TouchableOpacity>

      <ProductModal
        visible={Modalvisible}
        onClose={toggleModalVisible}
        animationType={'slide'}
        mode={'add'}
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

export default Home;
