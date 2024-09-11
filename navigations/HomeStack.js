import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Ex01">
          <Stack.Screen
            name="Ex01"
            component={Ures}
            options={{ title: "Exercise 1" }}
          />      
          <Stack.Screen
            name="Ex02"
            component={Ex02}
            options={{ title: "Exercise 2" }}
          />
        </Stack.Navigator>
      );
    
}

