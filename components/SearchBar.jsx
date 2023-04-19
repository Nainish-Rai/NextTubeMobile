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
    placeholder='Search NFTS'
    onChangeText={(Text)=>setSearchTerm(Text)}
    onSubmitEditing={()=>navigation.navigate("SearchScreen",{searchTerm})}
    className=" placeholder:text-gray-50 text-white text-base font-semibold h-6 w-16 rounded-full"/>
  )
}

export default SearchBar