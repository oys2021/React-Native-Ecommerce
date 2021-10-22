import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
// 
  

  const click=()=>{
      setText("Kwadwo")
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
  
  <View style={styles.texts}>
  <Image style={{width:180,height:180,transform: [{rotate: '45deg'}],marginBottom:40,borderRadius:20}}source={{uri:"https://images.unsplash.com/photo-1612882355276-43ad8ccb8693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"}}/>
    <Text style={styles.t1}>Welcome to</Text>
    <Text style={styles.t2}>Power Bike Shop</Text> 
    <View style={{marginTop:40}}>
    <TouchableOpacity>
      <Text style={{fontSize:20,backgroundColor:'black',color:'white',paddingLeft:95,paddingRight:95,paddingBottom:10,paddingTop:10,borderRadius:20}}> <AntDesign name="google" size={24} color="white" /> Login with Gmail</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:30}}>
    <TouchableOpacity>
      <Text style={{fontSize:20,backgroundColor:'black',color:'white',paddingLeft:95,paddingRight:95,paddingBottom:10,paddingTop:10,borderRadius:20}}> <AntDesign name="apple1" size={24} color="white" /> Login with apple</Text>
    </TouchableOpacity>
    </View>
    
   
    
    
  </View>
 

 



      </View>
      
 




      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
width:'100%',
height:'100%'
},
texts:{
// marginTop:'110%',
flex:1,
justifyContent:'center',
alignItems:'center',


},
t1:{

fontSize:40,
fontSize:30




},
t2:{
  fontWeight:'bold',
  fontSize:35

}




 
});
