import { StatusBar } from 'expo-status-bar';

import Home from './screens/Home';
import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from './screens/VideoScreen';
import SearchScreen from './screens/SearchScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import ChannelScreen from './screens/ChannelScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
      <NavigationContainer className="bg-black" style={{marginTop: Constants.statusBarHeight , backgroundColor: "Black"}}>
      <Stack.Navigator className="bg-black" screenOptions={{
        headerShown:false
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="VideoScreen" component={VideoScreen}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="ChannelScreen" component={ChannelScreen}/>
        <Stack.Screen name="PlaylistScreen" component={PlaylistScreen}/>
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor='black'/>
    </NavigationContainer>
     
  
  );
}


