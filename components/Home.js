import React from "react";
import {  View,  TextInput, Text, TouchableOpacity, Button } from "react-native";

export default function Home() {
  return (
    
    <View style={{ flex: 1, backgroundColor: '#004080' }}>
    
      
      
      <View style={{  backgroundColor :'#ffffff',marginTop : 50,margin : 10, padding : 10, borderRadius : 15,}}>
      <Text style={{ fontSize : 30,textAlign :'left',color :'##2C3E50' }}>สวัสดี .....</Text>
      <View style={{  backgroundColor :'#d1e1ed',marginTop : 10,margin : 10, padding : 10,}}>
      <Text style={{ fontSize : 25,textAlign :'center',color :'##2C3E50' }}>ยอดเงินต้นคงเหลือ</Text>
      <Text style={{ fontSize : 250,textAlign :'center',color :'#004080' ,marginTop : -80}}>o</Text>
      <Text style={{ fontSize : 40,textAlign :'center',color :'##2C3E50',marginTop : -50 }}>1000000</Text>
      <Text style={{ fontSize : 20,textAlign :'center',color :'#808080', }}>จากยอดเงินกู้ 1000000 บาท</Text>


      <Text style={{ fontSize : 20,textAlign :'center',color :'##2C3E50' }}>-----------------------------</Text>
      <Text style={{ fontSize : 25,textAlign :'center',color :'##2C3E50' }}>ชำระไปแล้ว</Text>
      <Text style={{ fontSize : 50,textAlign :'center',color :'#006400' }}>0.00%</Text>
      <Text style={{ fontSize : 20,textAlign :'center',color :'#808080', }}>จำนวนเงิน 0.00 บาท</Text>
      <Text style={{ fontSize : 15,textAlign :'center',color :'#808080', }}>*ยอดเงินต้นที่ชำระแล้ว*</Text>
      
      <View style={{ backgroundColor: 'rgba(0, 64, 128, 0.2)' , marginTop: 10, margin: 10, padding: 10, borderRadius: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#808080' }}>
            ชำระเงินครั้งล่าสุด
          </Text>
          <Text style={{ fontSize: 15, color: '#2C3E50' }}>
            ยังไม่มีการชำระเงิน
          </Text>
          
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#808080' }}>
            จำนวนเงิน
          </Text>
          <Text style={{ fontSize: 15, color: '#2C3E50' }}>
            0.00 บาท
          </Text>
          
        </View>
        </View>
        
        </View>
        <View style={{  backgroundColor :'#d1e1ed',marginTop : 10,margin : 10, padding : 10,}}>
        <Text style={{ fontSize : 25,textAlign :'center',color :'##2C3E50' }}>ยอดรวมที่ต้องชำระ</Text>
        <Text style={{ fontSize : 15,textAlign :'center',color :'#808080', }}>ยังไม่มีการเรียกให้ชำระเงินจากทาง กยศ.</Text>
        <Text style={{ fontSize : 15,textAlign :'center',color :'#808080',marginTop : 10 }}>ผู้กู้สามารถชำระเงินล่วงหน้าได้ โดยระบุจำนวนเงินที่ต้องการชำระในเมนูชำระเงิน</Text>
        <Button title="ชำระเงิน" color="red" />
        </View>

    </View>
      
      
       
      </View>
  
      


    
  );
}