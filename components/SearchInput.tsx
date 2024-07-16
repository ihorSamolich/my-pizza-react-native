import React, { useState } from 'react'
import { View, TouchableOpacity, Image, TextInput } from 'react-native'

import { icons } from '../constants'

interface SearchInputProps {
  query: string
  setQuery: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
  // const [searchText, setSearchText] = useState<string>(query)

  // const handleSearch = () => {
  //   setQuery(searchText)
  // }

  return (
    <View className="flex flex-row items-center w-full px-4 py-2 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        // value={searchText}
        value={query}
        placeholder="Шукати піцу..."
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
        // onChangeText={(e) => setSearchText(e)}
      />

      <TouchableOpacity
      // onPress={handleSearch}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
