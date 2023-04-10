import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from './screens/VideoScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
      <NavigationContainer style={{marginTop: Constants.statusBarHeight }}>
      <Stack.Navigator className="bg-black" screenOptions={{
        headerShown:false
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="VideoScreen" component={VideoScreen}/>
        {/* <Stack.Screen name="Test" component={Test}/> */}
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor='black'/>
    </NavigationContainer>
     
  
  );
}


