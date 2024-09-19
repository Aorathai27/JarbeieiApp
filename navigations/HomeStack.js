import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bookarsa from "../screens/์ืืBookarsa";
import BookD_arsa from "../screens/BookD_arsa";
import BookF_arsa from "../screens/BookF_arsa";



const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">

      <Stack.Screen name="Book" component={Bookarsa} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookD_arsa} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookF_arsa}   />
    
    </Stack.Navigator>
  );
}
