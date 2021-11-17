import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet,ScrollView} from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function Guava(params) {
  const navigation = params.navigation;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems:'center', marginHorizontal:30}}>
        <Image style={styles.productImg} source={
          require ("../assets/product-3.jpg")
        }/>
          <Text style={styles.name}>Guava</Text>
          <Text style={styles.price}>$ 30</Text>
          <Text style={styles.description}>
           Guava 
          </Text>
        </View>
        <View style={styles.starContainer}>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
        </View>
        
        
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} >
            <Text style={styles.shareButtonText}>Add To Cart</Text>  
          </TouchableOpacity>
        </View> 
      </ScrollView>
    </View>
  );
}      


const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    productImg:{
      width:200,
      height:200,
    },
    name:{
      fontSize:28,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"#696969",
    },
    star:{
      width:40,
      height:40,
    },
    btnColor: {
      height:30,
      width:30,
      borderRadius:30,
      marginHorizontal:3
    },
    btnSize: {
      height:40,
      width:40,
      borderRadius:40,
      borderColor:'#778899',
      borderWidth:1,
      marginHorizontal:3,
      backgroundColor:'white',
  
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    starContainer:{
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentColors:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentSize:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    separator:{
      height:2,
      backgroundColor:"#eeeeee",
      marginTop:20,
      marginHorizontal:30
    },
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    addToCarContainer:{
      marginHorizontal:30
    },
});
