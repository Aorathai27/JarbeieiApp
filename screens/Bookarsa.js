import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Bookarsa() {    
    const navigation = useNavigation();
    const [books, setBooks] = useState([
        { id: 1, name: "หลักสูตร “อุ่นใจไซเบอร์”",  image: "https://raw.githubusercontent.com/Aorathai27/JarbeieiApp/refs/heads/main/assets/AW%20%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%AD%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%83%E0%B8%88%20CYBER_980x397px.webp", },
        { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", },
        { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", },
        { id: 4, name: "พัฒนาเว็บแอพพลิเคชันด้วย React Redux+Bootstrap", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-4.jpg", },
    ]);    
    const [refresh, setRefresh] = useState(false);

    const loadBooks = async () => { };
    useEffect(() => { loadBooks(); }, []);

    const BookItem = ({ item, index })=>(
        <TouchableOpacity 
            onPress={() => { navigation.navigate("BookD_arsa", { "id": item.id }); }} 
            style={{ backgroundColor: "white", margin: 7, flex: 1, elevation: 5, }} 
            >
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
            </View>
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize: 20 }}> {item.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, color: "green" }}>{item.price}</Text>
                </View>
            </View>            
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={books}
                refreshing={refresh}
                onRefresh={() => { loadBooks(); }}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <BookItem item={item} /> ) }
            />
            <TouchableOpacity 
                // onPress={() => { navigation.navigate("BookForm", { id: null }); }} 
                style={{backgroundColor: "lightblue",flex: 1,alignItems: "center",justifyContent: "center",width: 80,height: 80,borderRadius: 40,position: "absolute",right: 30,bottom: 30,elevation: 5,}}
                >
                <FontAwesome name="plus" size={40} />
            </TouchableOpacity>
        </View>
    );
}