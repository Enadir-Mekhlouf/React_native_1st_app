import React, { useEffect } from 'react';
import {Alert, Button, Image, Modal, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons";
import PicturesItems from './App/components/PicturesItems';
import { useRoute } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import picImage from './assets/pic.png'; 


const SignUP =({navigation}: any) =>{
  const [text, onChangeText] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return (
    <SafeAreaView style={{flex:1, justifyContent:'space-between', backgroundColor:'#ffffff',padding:10}}>
     <View style={{paddingTop:"10%"}}>
      <Text style={{fontSize:30,color:'#050505'}}>Create Your Account</Text>
      </View>
    {/* <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        
      }}> */}
        <View style={{paddingBottom:"20%" ,alignItems:'center'}}>
        <View style={{paddingBottom:"20%"}}>
      <View>
        <Text style={{color:'#050505'}}>Username</Text>
        <TextInput
          placeholder='Username'
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View>
      <Text style={{color:'#050505'}}>Email</Text>
      <TextInput
      placeholder='...@gmail.com'
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      </View>
      <View>
      <Text style={{color:'#050505'}}>Password</Text>
      <TextInput
      placeholder='Password'
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
    </View>
    <View>
      <Text style={{color:'#050505'}}>Confirm Password</Text>
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      </View>
      </View>

      <View style={styles.centeredView}>
        <View style={{padding: 5,width:300}}>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTextStart}>Start</Text>
        </TouchableOpacity>
        </View>

        <View style={{padding: 5,width:300}}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Sign In button pressed')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>


        </View>


      </View>

    </View>
    </SafeAreaView>

  );
}


const ProductDetail = ({ route }: any) => {
  const { name, price } = route.params;
  const [Modalvisible,SetModalvisible]=React.useState(false)

  const toggleModalVisible = ()=> {
    SetModalvisible(!Modalvisible)

  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', width: "100%" }}>
      <View style={{alignItems: 'center', width: "100%" }}>
        <Image 
          source={picImage} 
          style={{ width: "100%", height: "60%"}}
        />
      </View>
      <View style={{ backgroundColor: "#ffffff", width: "100%", height:"65%", position:'absolute', zIndex:1 ,top:"35%", borderTopLeftRadius:20, borderTopRightRadius:20,justifyContent:'space-between'}}>
        

        <View style={{flex:1 , flexDirection:'column',paddingLeft:15, justifyContent:'space-between',paddingBottom:20}}>
        <Text style={{ fontSize: 20 }}>Label: {name}</Text>
        <Text style={{ fontSize: 20 }}>Price: {price} usd</Text>
        <Text>description description description description description description description description description description description 
          description description description description </Text>

        <Text style={{ fontSize: 20 }}>Code Bar:</Text>

        </View>

        <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={{padding: 5,width:300}}>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={toggleModalVisible}
          >
          <Text style={styles.buttonTextStart}>Edit</Text>
        </TouchableOpacity>
        </View>
        <View style={{padding: 5,width:300}}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Sign In button pressed')}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>

      
      <ProductModal visible={Modalvisible} onClose={toggleModalVisible} animationType={"slide"} mode={'edit'} item={{name, price}} />
      
    </SafeAreaView>

  );
};





const ProductModal=({ visible, onClose,animationType,mode, item}: any)=>{

  const [text, onChangeText] = React.useState("");
  const [Password, onChangePassword] = React.useState("");
  const IseditMode = mode ==='edit';
  const [imageUri, setImageUri] = React.useState(null);

  const openGallery = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
    };

    // Launch image gallery to pick an image
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Error:', response.errorMessage);
      } else {
        const selectedImage = response.assets[0].uri;
        setImageUri(selectedImage); // Store the image URI in state
      }
    });
  };

  console.log(item?.price);
  
  useEffect(()=>{

    if(item){
      onChangeText(item.name)
      onChangePassword(item.price.toString())
    }
  }, [item])
  
  return(
    <Modal
      animationType={animationType}
      visible={visible}
      onRequestClose={onClose} 
     
    
    >
      <SafeAreaView style={{flex:1, justifyContent:'space-between', backgroundColor:'#ffffff',padding:20}}>
    <View>
      <Text style={{fontSize:30,color:'#050505'}}>{IseditMode?'Product Label':'Create Product'}</Text>
    </View>


  


      <View style={{alignItems:'center'}}>
        <View>
          <Text style={{color:'#050505'}}>Label</Text>
          <TextInput
          placeholder='Label'
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View>
        <Text style={{color:'#050505'}}>Description</Text>
        <TextInput
        placeholder='Description'
          style={styles.input}
          onChangeText={onChangePassword}
          value={Password}
        />
        </View>
        <View>
        <Text style={{color:'#050505'}}>Price</Text>
        <TextInput
        placeholder='Price'
          style={styles.input}
          onChangeText={onChangePassword}
          value={Password}
        />
        </View>
        <View >
        <Text style={{color:'#050505'}}>Code Bar</Text>
        <TextInput
        placeholder='Code bar'
          style={styles.input}
          onChangeText={onChangePassword}
          value={Password}
        />
        </View>
      </View>
      <View style={{width:"100%",alignItems:'center'}}>
        <TouchableOpacity style={{width:"100%"}} >
        <View style={{backgroundColor:'#eeeeee',alignItems:'center',width:"100%",borderRadius:20,borderStyle:'dashed',borderColor:'gray', borderWidth:1, marginBottom:20, padding:20}}>
          <EvilIcons name='image' color={'black'} size={100}/>
          <Text> Add An Image</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <View style={{padding: 5,width:300}}>
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => {
              Alert.alert('Product saved!');
              onClose();
            }}>
            <Text style={styles.buttonTextStart}>Save</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
    </Modal>
  )

}





const Home=({navigation}: any)=>{
  const [Modalvisible,SetModalvisible]=React.useState(false)
  const toggleModalVisible = ()=> {
    SetModalvisible(!Modalvisible)

  }

  const MyData = require('./data/internship.json');
  
  const shomedata=()=>{
    console.log(MyData.length)
  }
  useEffect(() => {
    shomedata()
  }, []);
  return(

    <SafeAreaView style={{flex:1,padding:1,backgroundColor:'white'}}>
      <ScrollView>
        <View style={{paddingTop:"10%",paddingHorizontal:30}}>
        <Text style={{fontSize:20 ,color:'#050505'}}>Hello Username !
          
        </Text>
        </View>
        
       
        <View>
        {MyData.map((item, index) => (
            <PicturesItems
              key={index} 
              navigation={navigation}
              name={item.label} 
              price={item.price} 
              imageSource={picImage}
            />
          ))}
        </View>
        
      </ScrollView>
      <TouchableOpacity style={{position:'absolute',bottom:20,right:10,borderRadius:100,zIndex:1,justifyContent:'center',alignItems:'center'}}
      
      onPress={toggleModalVisible}
      > 


        <MaterialIcons name='add-circle' color={'#4f4f4f'} size={70} />
        
      </TouchableOpacity>

      <ProductModal visible={Modalvisible} onClose={toggleModalVisible} animationType={"slide"}  mode={'add'}/>
     
    </SafeAreaView>
  )
}
const Product=()=>{
  const [text, onChangeText] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return(
    <>
     <View style={{}}>
      <Text style={{marginLeft: 12,fontSize:30,color:'#050505'}}>Create Product</Text>
      </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        alignItems:'center'
        
      }}>

      <View>
        <Text style={{marginLeft: 12,color:'#050505'}}>Label</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View>
      <Text style={{marginLeft: 12,color:'#050505'}}>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      </View>
      <View>
      <Text style={{marginLeft: 12,color:'#050505'}}>Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      </View>
      <View>
      <Text style={{marginLeft: 12,color:'#050505'}}>Code Bar</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
      </View>

      <View style={{width:"80%",alignItems:'center', justifyContent:'space-between'}}>
      <View style={{backgroundColor:'#eeeeee',alignItems:'center',borderRadius:20,width:"80%",borderStyle:'dashed',borderColor:'gray', borderWidth:1,}}>
        <EvilIcons name='image' color={'black'} size={100}/>
        <Text> Add An Image</Text>
      </View>

      <View style={styles.centeredView}>
        <View style={{padding: 5,width:300}}>
         <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => Alert.alert('Sign In button pressed')}>
          <Text style={styles.buttonTextStart}>Save</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
    </>
  )
  
}


const Stack = createNativeStackNavigator();
const SignIN = ({navigation}: any) => {
  const [text, onChangeText] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  return (
    <SafeAreaView style={{flex:1, justifyContent:'space-between', backgroundColor:'#ffffff',padding:10}}>
    
    {/* <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        
      }}> */}
        <View style={{flex:1,paddingBottom:"20%" ,alignItems:'center',justifyContent:'space-around'}}>
        <View style={{paddingTop:"10%",paddingHorizontal:10,alignSelf:'flex-start'}}>
      <Text style={{fontSize:30,color:'#050505'}}>Welcome Back !</Text>
      </View>
      <View>
      <View >
        {/* <MaterialIcons name='restore-from-trash' color={"black"} /> */}
        <Text style={{color:'#050505'}}>Username</Text>
        <TextInput          
          placeholder='Username'
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={{paddingBottom:"20%"}}>
      <Text style={{color:'#050505'}}>Password</Text>
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={Password}
      />
        </View>
        </View>
      <View style={styles.centeredView}>
        <View style={{padding: 5,width:300}}>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.navigate('SignUp')}>
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
    </SafeAreaView>


  );
};

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
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIN} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

