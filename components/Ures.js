import React from "react";
import {  View,  TextInput, Text, TouchableOpacity } from "react-native";


export default function Ures() {
  return (
    <View  >
    <View style={{  backgroundColor :'#ffffff',marginTop : 10,margin : 20, padding : 10, borderWidth : 1, borderRadius : 15,}}>
      {/* View ก้อนที่ 1 */}
      <View >
        <Text style={{ fontSize : 30,textAlign :'left',color :'#2C3E50' }}>อรทัย สิงห์จินดา</Text>
        <View style={{  backgroundColor :'#d1dddb',marginTop : 20,margin : 5, padding : 5, borderWidth : 1, borderColor : 'gray',borderRadius : 5,}}>
        <Text style={{ fontSize : 20,textAlign :'left',color :'#1d6a95' }}>ลักษณะผู้ใช้งาน : ผู้กู้</Text>
        </View>
      </View>
      </View>

      <View style={{  backgroundColor :'#ffffff',marginTop : 5,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>รายละเอียดบัญชี</Text></View>

      <View style={{  backgroundColor :'#ffffff',marginTop : 5,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>แก้ไขข้อมูลส่วนตัว</Text></View>
      <View style={{  backgroundColor :'#ffffff',marginTop : -19,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>เปลี่ยนรหัสผ่าน</Text></View>
      <View style={{  backgroundColor :'#ffffff',marginTop : -19,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>เปลี่ยนรหัส PIN</Text></View>
      <View style={{  backgroundColor :'#ffffff',marginTop : -19,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>เปลี่ยนรหัสผ่าน</Text></View>
      <View style={{  backgroundColor :'#ffffff',marginTop : -19,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>การตั้งค่าผู้ใช้งาน</Text></View>


      <View style={{  backgroundColor :'#ffffff',marginTop : 5,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>ข้อตกลงและเงื่อนไข</Text></View>
      <View style={{  backgroundColor :'#ffffff',marginTop : -19,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>ติดต่อ กยศ.</Text></View>

      <View style={{  backgroundColor :'#ffffff',marginTop : '10',margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>ออกจากระบบ</Text></View>
    </View>
);
}