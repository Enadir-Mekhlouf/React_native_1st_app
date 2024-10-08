import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const PicturesItems = ({
  navigation,
  imageUri,
  name,
  price,
  description,
  CodeBar,
  id,
}: any) => {
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 30, paddingTop: 10}}
      onPress={() =>
        navigation.navigate('ProductDetail', {
          id,
          name,
          price,
          description,
          imageUri,
          CodeBar,
        })
      }>
      <Image
        source={{uri: imageUri.uri}}
        style={{width: '100%', height: 170}}
        borderTopRightRadius={10}
        borderTopLeftRadius={10}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: '#eeeeee',
          padding: 10,
        }}>
        <Text style={{color: '#050505'}}>{name}</Text>
        <Text style={{color: '#050505', fontWeight: 'bold'}}>
          price {price} dzd
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PicturesItems;
