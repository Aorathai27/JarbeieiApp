import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Name: {userData.name}</Text>
      <Text>ID: {userData.id}</Text>
      <Text>Amount: {userData.amount}</Text>
    </View>
  );
};

export default UserInfo;
