import { View, Text } from 'react-native'
import React from 'react'
import { useEffect , useState } from 'react'
import { api } from '../utils/api'
import VideoCard from '../components/VideoCard'
import { ScrollView } from 'react-native'
import VideoList from '../containers/VideoList'
const SearchScreen = ({route,navigation}) => {
    const [data, setData] = useState([]);
    const { searchTerm } = route.params;

  useEffect(()=>{
    api(`search?q=${searchTerm}&region=IN`).then((response)=>{
      setData(response)
    })
   },[searchTerm])
   console.log(data) 
  return (
    <ScrollView className="bg-black h-full">
     <VideoList data={data}/>
    </ScrollView>
  )
}

export default SearchScreen