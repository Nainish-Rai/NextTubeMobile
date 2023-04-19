import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'
import { useNavigation } from "@react-navigation/native";
import SearchBar from './SearchBar';

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
    <View className="p-2 pt-4 h-14 items-center justify-between z-10 fixed top-0 flex flex-row">
      <Text onPress={()=>toggleColorScheme} className="font-medium ml-2 text-4xl text-gray-50">NextTube</Text>
     <SearchBar/>
    </View>
  )
}

export default NavBar