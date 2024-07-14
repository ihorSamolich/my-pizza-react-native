import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { IPizza } from '@/interfaces/pizza'
import { Link } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import { BASE_URL } from '@/constants/Urls'

interface PizzaCardProps {
  pizza: IPizza
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  return (
    <View className="flex flex-1 bg-white rounded-md p-2 items-center shadow-sm shadow-white relative">
      <Image source={{ uri: `${BASE_URL}/images/200_${pizza.photos[0].name}` }} className="w-24 h-24 rounded-full mb-2" />
      <Text className="text-red-600 font-bold">$100</Text>
      <Text className="text-lg font-semibold mb-1">{pizza.name}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail" className="flex-1 text-gray-500 text-xs text-center mb-4">
        {pizza.description}
      </Text>
      <TouchableOpacity activeOpacity={0.9} className="bg-secondary rounded-full px-10 py-1 absolute -bottom-3">
        <Text className="text-center text-white font-bold">Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PizzaCard
