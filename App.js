import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import FlatListExample from './screens/FlatListExample';

export default function App() {
  return (
//     <NavigationContainer>
//     <BottomTab />
// </NavigationContainer>
<FlatListExample/>
  );
}



