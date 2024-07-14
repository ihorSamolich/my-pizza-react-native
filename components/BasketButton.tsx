import React from 'react'
import { View, Text, Image } from 'react-native'
import { images } from '@/constants'
import { Link } from 'expo-router'

const BasketButton = () => {
  return (
    <Link href={'/basket'} className="absolute bottom-4 right-4">
      <View className="flex-row items-center justify-center bg-gray-800 rounded-full py-1 px-4">
        <Text className="text-white text-lg font-bold mr-2">£60.40</Text>
        <View className="relative">
          <Image source={images.pizzaBasket} className="w-12 h-12 rounded-full" />
          <View className="absolute right-0 top-0 bg-orange-500 w-5 h-5 rounded-full flex items-center justify-center">
            <Text className="text-white text-xs font-bold">3</Text>
          </View>
        </View>
      </View>
    </Link>
  )
}

export default BasketButton
