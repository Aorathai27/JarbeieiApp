import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ures from '../components/Ures';
import Home from '../components/Home';

export default function UresL() {
    return (      
        <ScrollView>
        <View style={{  flexDirection : "column" , backgroundColor: 'rgba(0, 64, 128, 0.1)' }}>
            <Ures/>
            
            
        </View>
        </ScrollView>  
    );
}
