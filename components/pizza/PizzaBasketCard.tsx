import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { icons, images } from '@/constants'
import { IPizza } from '@/interfaces/pizza'
import { BASE_URL } from '@/constants/Urls'
import { useAppDispatch } from '@/redux/store'
import { removeFromBasket } from '@/redux/slices/basketSlice'

interface PizzaBasketCardProps {
  pizza: IPizza
}

const PizzaBasketCard: React.FC<PizzaBasketCardProps> = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1)
  const minPrice = Math.min(...pizza.sizes.map((size) => size.price))

  const dispatch = useAppDispatch()
  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  const removePizzaFromBasket = () => {
    dispatch(removeFromBasket(pizza.id))
  }

  return (
    <View className="flex-row rounded-lg overflow-hidden shadow-md w-full max-w-[350px]">
      <ImageBackground source={images.basketcardbg} className="flex-1 bg-cover resize">
        <View className="flex-row items-center py-2 px-4">
          <Image
            source={{ uri: `${BASE_URL}/images/200_${pizza.photos[0].name}` }}
            className="w-20 h-20 rounded-full mr-4"
            resizeMode="cover"></Image>
          <View className="flex-1">
            <Text className="font-bold text-lg">{pizza.name}</Text>
            <Text className="text-green-600 text-lg">{minPrice.toFixed()} ₴</Text>
            <View className="flex-row items-center mt-2">
              <TouchableOpacity
                className="h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center mr-2"
                onPress={decreaseQuantity}>
                <Text className="text-lg font-bold">-</Text>
              </TouchableOpacity>
              <Text className="text-lg">{quantity}</Text>
              <TouchableOpacity
                className="h-7 w-7 bg-secondary rounded-full flex items-center justify-center ml-2"
                onPress={increaseQuantity}>
                <Text className="text-lg font-bold">+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-red-500 p-2 rounded-full" onPress={removePizzaFromBasket}>
            <Image source={icons.trush} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PizzaBasketCard
