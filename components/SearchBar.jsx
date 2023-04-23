import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const navigation = useNavigation();
    const [searchTerm,setSearchTerm]=useState("")
  return (
    <TextInput
    placeholder='Search Here'
    placeholderTextColor="#FFF"
    onChangeText={(Text)=>setSearchTerm(Text)}
    onSubmitEditing={()=>navigation.navigate("SearchScreen",{searchTerm})}
    className="bg-gray-300/10 placeholder:text-gray-100 px-4 p-2 inset-4 text-white text-base font-medium w-36 rounded-full"/>
  )
}

export default SearchBar