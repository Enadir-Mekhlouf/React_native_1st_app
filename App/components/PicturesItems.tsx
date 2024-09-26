import React from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Ensure this import for icons



const PicturesItems = ({navigation,imageSource,name,price,description,CodeBar,id}:any) =>{
    
    return(
        <TouchableOpacity style={{paddingHorizontal:30,paddingTop:10}}
        onPress={() => navigation.navigate('ProductDetail', { 
            id,
            name, 
            price, 
            description, 
            imageUri: imageSource,
            CodeBar, })}
        >
            <Image 
                source={imageSource}
                style={{width:'100%',height:170}}
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
                
            />
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomRightRadius:10,borderBottomLeftRadius:10,backgroundColor:'#eeeeee',padding:10,}}>
                <Text style={{color:'#050505'}}>{name}</Text>
                <Text style={{color:'#050505'}}>price {price} dzd</Text>
            </View>

        </TouchableOpacity>
    )

}

export default PicturesItems