import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
 
  return (
    <View className="flex h-screen ml-2 mt-14 "> 
      <Home/>
      <Text className="font-medium text-5xl">NextTube</Text>
      <StatusBar style="auto" />
    </View>
  );
}


