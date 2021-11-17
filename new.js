import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,TextInput,Icon} from 'react-native';

export default function App() {
// 
  

  const click=()=>{
      setText("Kwadwo")
  }
  return (
    < SafeAreaView   style={{
      flex:1,
      paddingHorizontal:20,
      backgroundColor:'white',
      }}>

<View style={styles.header}>
<View>
<Text style={{fontsize:25}}>Welcome to</Text>
<Text style={{fontSize:38,color:'green'}}>Plant Shop</Text>


</View>
<Icon name="shopping cart"/>
</View>
<View style={{marginTop:30,flexDirection:'row'}} ></View>
<View style={styles.searchContaimer}>
    <Icon name="search" size={25}  style={{marginTop:10}}/>
    <TextInput placeholder="search"/>
</View>
  </SafeAreaView> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize:30,
    marginBottom:70,
    },
  output:{
 paddingTop:40,
  },
 
});
