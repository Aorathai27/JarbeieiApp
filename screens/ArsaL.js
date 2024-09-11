import React from "react";
import { ScrollView, View } from "react-native";
import Arsa from "../components/AS.js/Arsa";

export default function AresL() {
    return (
        <ScrollView>
             <View style={{  flexDirection : "column" , backgroundColor: 'rgba(0, 64, 128, 0.2)' }}>
                <Arsa/>
            </View>
        </ScrollView>

    );
}
