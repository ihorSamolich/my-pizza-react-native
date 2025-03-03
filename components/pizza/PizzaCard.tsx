import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { IPizza } from '@/interfaces/pizza'
import { BASE_URL } from '@/constants/Urls'
import { router } from 'expo-router'

interface PizzaCardProps {
  pizza: IPizza
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const minPrice = Math.min(...pizza.sizes.map((size) => size.price))

  const handleSelectPizza = () => {
    router.push(`/pizza/${pizza.id}`)
  }

  return (
    <View
      className={`flex flex-1 bg-white rounded-md p-2 items-center shadow-sm shadow-white relative ${!pizza.isAvailable && 'opacity-20'}`}>
      <Image source={{ uri: `${BASE_URL}/images/200_${pizza.photos[0].name}` }} className="w-24 h-24 rounded-full mb-2" />
      <Text className="text-red-600 font-bold">від {minPrice.toFixed()} ₴</Text>
      <Text className="text-lg font-semibold mb-1">{pizza.name}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail" className="flex-1 text-gray-500 text-xs text-center mb-4">
        {pizza.ingredients.map((i) => i.name).join(', ')}
      </Text>

      <TouchableOpacity
        disabled={!pizza.isAvailable}
        onPress={handleSelectPizza}
        activeOpacity={0.9}
        className="bg-secondary rounded-full px-10 py-1 absolute -bottom-3">
        <Text className="text-center text-white font-bold">{pizza.isAvailable ? 'Замовити' : 'Відсутня'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PizzaCard
