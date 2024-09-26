import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ฟังก์ชันสำหรับดึงข้อมูลจาก AsyncStorage
const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data', e);
  }
};

// คอมโพเนนต์สำหรับแสดงข้อมูลผู้ใช้
const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    fetchData();
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>; // แสดงข้อความระหว่างโหลดข้อมูล
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {userData.name}</Text>
      <Text style={styles.text}>ID: {userData.id}</Text>
      <Text style={styles.text}>Amount: {userData.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default UserInfo;
