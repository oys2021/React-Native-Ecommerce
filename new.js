import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';

export default function App() {
// 
  

  const click=()=>{
      setText("Kwadwo")
  }
  return (
    <View style={styles.container}>
      
    
           <View >
           <Text style={styles.input} >HELLO GUYS</Text> 
              <View style={styles.output}>
           
              <TextInput 
        style={{height: 40,alignContent:'center'}}
        placeholder="STUDENTS NAME"
      />
       <TextInput
        style={{height: 40,alignContent:'center'}}
        placeholder="INDEX NUMBER"
      />
       <TextInput
        style={{height: 40,alignContent:'center'}}
        placeholder="STUDENT AGE"
      />
      <TextInput
        style={{height: 40,alignContent:'center'}}
        placeholder="STUDENT HEIGHT"
      />
      <TextInput
        style={{height: 40,alignContent:'center'}}
        placeholder="STUDENT WEIGHT"
      />
      <View><Button title="Submit">
        
        </Button></View>





              </View>

             </View>







      </View>
      
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
