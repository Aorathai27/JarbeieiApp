import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function Tour(props) {
  const [onlineTours, setOnlineTours] = useState([]);

  const loadOnlineTours = async () => {
    try {
      let text = await fetch('https://raw.githubusercontent.com/Aorathai27/JarbeieiApp/main/text2.json');
      let data = await text.json();
      console.log("Load Data : ", data);
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>บริการต่างๆที่เกี่ยวข้อง</Text>
      <Text style={{ color: "grey" }}>
        บริการที่เกี่ยวข้องกับผู้กู้ ก.ย.ศ </Text>
      

      <FlatList
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={onlineTours}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={{ marginBottom: 10, backgroundColor: '#d1dddb',borderRadius: 10}}>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 2.0 -5,
                  height: 200,
                  borderRadius: 10,
                }}
                source={{ uri: item.uri }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 30,
                  width: '100%',
                  paddingHorizontal: 10,
                  backgroundColor: '#d1dddb',
                  opacity: 0.5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: "black" }}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
