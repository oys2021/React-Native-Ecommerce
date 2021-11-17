import React from "react";
import {View,Text,SafeAreaView,StyleSheet, TextInput} from 'react-native';
import Icon from "react-native-vector-icons"






const Home=() =>{
  < SafeAreaView>
  style={{
flex:1,
paddingHorizontal:20,
backgroundColor:white,

}}
<View style={style.header}>
<View>
<Text style={{fontsize:25,fontWeight:bold}}>Welcome to</Text>
<Text style={{fontSize:38,fontWeight:bold,color:green}}>Plant Shop</Text>


</View>
<Icon name="shopping cart"/>
</View>
<View style={{marginTop:30,flexDirection:'row'}} ></View>
<View style={style.searchContaimer}>
    <Icon name="search" size={25}  style={{marginLeft}}/>
    <TextInput placeholder="search"/>
</View>
  </SafeAreaView> 

};

const style=StyleSheet.create({
header:{
marginTop:20,
flexDirection:'row',
justifyContent:'space-between',
},
searchContaimer:{
height:50,
backgroundColor:'white',
borderRadius:10,
flex:1,
flexDirection:'row',
alignItems:'center'

},
input:{
  fontSize:18,
  fontWeight:'bold',
  color:'dark',
  flex:1
 
 
 }

});
