import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
         
          borderRadius: 20,
          marginBottom: 60,
          width: 300,
          height: 300,
        }}
        source={
          require ("C:\\Users\\USER\\Desktop\\lasr rn\\mreactnative\\assets\\food.jpg")
        }
      />
      <Text style={{ fontSize: 30, color: "green",alignContent:"center" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>ORGANI SPECIAL</Text>
      {/* <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View> */}
      {/* <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "green",
        }}
      >
       
        <Text style={{ paddingLeft: 10, color: "white" ,fontSize:30}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
