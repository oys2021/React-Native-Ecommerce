import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./views/details";
import Home from "./views/Home";
import Collins from "./views/collins";
import Signup from "./views/Signup";
import banana from "./views/banana";
import Grapes from "./views/Grapes";
import Guava from "./views/Guava";
import Mango from "./views/Mango";
import Humberger from "./views/Humberger";
import Melon from "./views/WaterMelon";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Collins" component={Collins} />
          <MainNavigator.Screen name="Signup" component={Signup} />
          <MainNavigator.Screen name="banana" component={banana} />
          <MainNavigator.Screen name="Grapes" component={Grapes} />
          <MainNavigator.Screen name="Guava" component={Guava} />
          <MainNavigator.Screen name="Mango" component={Mango} />
          <MainNavigator.Screen name="Humberger" component={Humberger} />
          <MainNavigator.Screen name="Melon" component={Melon} /> 




         
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
