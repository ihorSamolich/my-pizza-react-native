import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { icons, images } from '@/constants'
import { BASE_URL } from '@/constants/Urls'
import { useAppDispatch } from '@/redux/store'
import { IBasketPizza } from '@/interfaces/basket'
import { changePizzaQuantity, removeFromBasket } from '@/redux/slices/basketSlice'

interface PizzaBasketCardProps {
  pizza: IBasketPizza
}

const PizzaBasketCard: React.FC<PizzaBasketCardProps> = ({ pizza }) => {
  const dispatch = useAppDispatch()

  const increaseQuantity = () => dispatch(changePizzaQuantity({ pizza: pizza.pizza, size: pizza.size, quantity: pizza.quantity + 1 }))
  const decreaseQuantity = () =>
    dispatch(changePizzaQuantity({ pizza: pizza.pizza, size: pizza.size, quantity: pizza.quantity > 1 ? pizza.quantity - 1 : 1 }))

  const removePizzaFromBasket = () => {
    dispatch(removeFromBasket({ pizzaId: pizza.pizza.id, sizeId: pizza.size.id }))
  }

  return (
    <View className="flex-row rounded-lg overflow-hidden shadow-md w-full max-w-[350px]">
      <ImageBackground source={images.basketcardbg} className="flex-1 bg-cover resize">
        <View className="flex-row items-center py-2 px-4">
          <Image
            source={{ uri: `${BASE_URL}/images/200_${pizza.pizza.photos[0].name}` }}
            className="w-20 h-20 rounded-full mr-4"
            resizeMode="cover"></Image>
          <View className="flex-1">
            <Text className="font-bold text-lg">{`${pizza.pizza.name} ${pizza.size.sizeName} см`}</Text>
            <Text className="text-green-600 text-lg">{pizza.size.price.toFixed()} ₴ шт</Text>
            <View className="flex-row items-center mt-2">
              <TouchableOpacity
                className="h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center mr-2"
                onPress={decreaseQuantity}>
                <Text className="text-lg font-bold">-</Text>
              </TouchableOpacity>
              <Text className="text-lg">{pizza.quantity}</Text>
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
