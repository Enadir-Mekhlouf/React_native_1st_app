import React from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeitem} from '../../redux/ItemSlice';
import ProductModal from './ProductModal';
import CustomButton from '../components/Button';

const ProductDetail = ({route, navigation}: any) => {
  const {id} = route.params;

  const product = useSelector(
    (state: any) => state.items.items.filter(i => i.id == id)[0],
  );

  const [Modalvisible, SetModalvisible] = React.useState(false);
  const dispatch = useDispatch();

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
        <Image
          source={{uri: product.imageUri}}
          style={{width: '100%', height: '60%'}}
        />
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
            Label {product.name}
          </Text>
          <Text style={{fontSize: 20, color: '#050505', paddingBottom: 20}}>
            Price {product.price}{' '}
          </Text>
          <Text style={{paddingBottom: 20}}>
            description :{product.description}{' '}
          </Text>
          <Text style={{fontSize: 20, color: '#050505'}}>
            Code Bar {product.CodeBar}
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
        item={{
          name: product.name,
          price: product.price,
          description: product.description,
          CodeBar: product.CodeBar,
          id,
          imageUri: product.imageUri,
        }}
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
