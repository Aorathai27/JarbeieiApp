import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome } from "@expo/vector-icons";
import UresL from '../screens/UresL';
import HomeL from '../screens/HomeL';
import AresL from '../screens/ArsaL';
import BArsa from '../screens/BArsa';
import Bookarsa from '../screens/์ืืBookarsa';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeL}
            options={{
              tabBarLabel: "หน้าหลัก",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
           <Tab.Screen
            name="บริการ"
            component={AresL}
            options={{
              tabBarLabel: "บริการ",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="briefcase" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="ข้อมูลผู้ใช้"
            component={UresL}
            options={{
              tabBarLabel: "Ures",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="user" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="book"
            component={Bookarsa}
            options={{
              tabBarLabel: "Ures",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="user" color={color} size={size} /> ),
            }}
          />
    
         
        </Tab.Navigator>
      );
    

}
