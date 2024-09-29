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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import store from '../../redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {additem, removeitem, updateitem} from '../../redux/ItemSlice';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/Button';
const ProductModal = ({visible, onClose, animationType, mode, item}: any) => {
  const [text, setText] = React.useState(item ? item.name : '');
  const [description, setDescription] = React.useState(
    item ? item.description : '',
  );
  const [price, setPrice] = React.useState(item ? item.price : '');
  const [CodeBar, setCodeBar] = React.useState(item ? item.CodeBar : '');
  const [imageUri, setImageUri] = React.useState(item ? item.imageUri : null);

  const IseditMode = mode === 'edit';
  const dispatch = useDispatch();
  const handleSave = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: text,
      price,
      CodeBar,
      description,
      imageUri,
    };

    if (mode === 'edit') {
      dispatch(updateitem({id: item.id, updates: newProduct}));
      // onSave(newProduct);
    } else {
      dispatch(additem(newProduct));
    }

    onClose();
  };
  const openGallery = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Error:', response.errorMessage);
      } else {
        const selectedImage = response.assets[0].uri;
        setImageUri(selectedImage);
      }
    });
  };
  useEffect(() => {
    if (item) {
      setText(item.name);
      setPrice(item.price.toString());
    }
  }, [item]);

  return (
    <Modal
      animationType={animationType}
      visible={visible}
      onRequestClose={onClose}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: 20,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{alignItems: 'center'}}>
            <View style={{alignSelf: 'flex-start', paddingBottom: '20%'}}>
              <Text style={{fontSize: 30, color: '#050505'}}>
                {IseditMode ? 'Product Label' : 'Create Product'}
              </Text>
            </View>
            <View>
              <Text style={{color: '#050505'}}>Label</Text>

              <CustomTextInput
                value={text}
                onChangeText={setText}
                placeholder={'Label'}
                secureTextEntry={false}
              />
            </View>
            <View>
              <Text style={{color: '#050505'}}>Description</Text>

              <CustomTextInput
                value={description}
                onChangeText={setDescription}
                placeholder={'Descriptions'}
                secureTextEntry={false}
              />
            </View>
            <View>
              <Text style={{color: '#050505'}}>Price</Text>

              <CustomTextInput
                value={price}
                onChangeText={setPrice}
                placeholder={'Price'}
                secureTextEntry={false}
              />
            </View>
            <View>
              <Text style={{color: '#050505'}}>Code Bar</Text>

              <CustomTextInput
                value={CodeBar}
                onChangeText={setCodeBar}
                placeholder={'Code Bar'}
                secureTextEntry={false}
              />
            </View>
          </View>

          {/* this view is the view where i add image and "save" it */}
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style={{width: '100%'}} onPress={openGallery}>
              <View
                style={{
                  backgroundColor: '#eeeeee',
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: 20,
                  borderStyle: 'dashed',
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                  padding: 20,
                }}>
                {/* <EvilIcons name='image' color={'black'} size={100}/>
              <Text> Add An Image</Text> */}

                {imageUri ? (
                  <Image
                    source={{uri: imageUri}}
                    style={{width: '100%', height: 200, borderRadius: 10}}
                  />
                ) : (
                  <>
                    <EvilIcons name="image" color={'black'} size={100} />
                    <Text>Add An Image</Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
            <View style={styles.centeredView}>
              <View style={{padding: 5, width: 300}}>
                <CustomButton
                  title={mode === 'edit' ? 'Save Changes' : 'Create Product'}
                  onPress={() => {
                    Alert.alert('Product saved!');
                    handleSave();
                    onClose();
                  }}
                  theme={'primary'}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
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

export default ProductModal;
