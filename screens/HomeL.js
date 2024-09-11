import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from '../components/Home';

export default function () {
    return (      
        <ScrollView>
        <View style={{  flexDirection : "column" , backgroundColor: 'rgba(0, 64, 128, 0.2)' }}>
            
            <Home/>
            
        </View>
        </ScrollView>  
    );
}
