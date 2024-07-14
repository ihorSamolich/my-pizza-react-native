import { useState } from 'react'
import { View, TouchableOpacity, Image, TextInput } from 'react-native'

import { icons } from '../constants'

const SearchInput = () => {
  const [query, setQuery] = useState('')

  return (
    <View className="flex flex-row items-center w-full px-4 py-2 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Шукати піцу..."
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity onPress={() => {}}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
