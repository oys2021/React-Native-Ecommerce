import React from "react";
import { View,Text,styles, ScrollView ,Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Card, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SearchBar } from 'react-native-elements';


export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
    
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SearchBar
      placeholder="Search"
      value={searchQuery}
    />
          <Ionicons name="notifications-outline" size={20} color="black"/>
         
         </View>
        

        
      </View>
      <ScrollView>
      <Card 
           >
             <Image source={
          require ("../assets/product-1.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                Fresh Meat
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 40
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Collins");
            }}/>
        </Card>
        <Card
           >
             <Image source={
          require ("../assets/product-2.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}}  h2>
                Banana
            </Text>
            <Text  style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 20
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}}  h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("banana");
            }} />
        </Card>

        <Card
           >
             <Image source={
          require ("../assets/product-3.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                Guava
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 30
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Guava");
            }} />
        </Card>
       
        <Card
           >
             <Image source={
          require ("../assets/product-4.jpg")
        } style={{width:330}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                Grapes
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}}  h4>
                $ 50
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Grapes");
            }} />
        </Card>
       
        <Card
           >
             <Image source={
          require ("../assets/product-5.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                Humberger
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 70
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Humberger");
            }}/>
        </Card>

        <Card
           >
             <Image source={
          require ("../assets/product-6.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                Mango
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 90
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Mango");
            }} />
        </Card>
       
        <Card
           >
             <Image source={
          require("../assets/product-7.jpg")
        } style={{width:310}}/>
            <Text style={{marginBottom: 10, marginTop: 20,fontSize:20,fontWeight:'bold',color:'green'}} h2>
                WaterMelon
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}} h4>
                $ 60
            </Text>
            <Text h6>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => {
              navigation.navigate("Melon");
            }} />
        </Card>
       
       
       
        
        </ScrollView>
    </View>
  );
}
