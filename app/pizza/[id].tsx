import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import AppLogo from '@/components/AppLogo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetPizzaByIdQuery } from '@/services/pizzaService'
import SizeSelector from '@/components/SizeSelector'
import { BASE_URL } from '@/constants/Urls'
import CustomButton from '@/components/CustomButton'
import { useAppDispatch } from '@/redux/store'
import { addToBasket } from '@/redux/slices/basketSlice'
import { IPizzaSize } from '@/interfaces/pizza'

const PizzaScreen = () => {
  const { id } = useLocalSearchParams()
  const { data: pizza } = useGetPizzaByIdQuery(Number(id))

  const [price, setPrice] = useState<number>(0)
  const [size, setSize] = useState<string>('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pizza && pizza.sizes) {
      const minSize = Math.min(...pizza.sizes.map((size) => Number(size.sizeName)))
      const minPrice = Math.min(...pizza.sizes.map((size) => size.price))

      setPrice(minPrice)
      setSize(minSize.toString())
    }
  }, [pizza])

  const addPizzaToBasket = () => {
    if (pizza) {
      const pizzaSize: IPizzaSize | undefined = pizza.sizes.find((s) => s.sizeName === size)

      if (pizzaSize) {
        dispatch(addToBasket({ pizza, size: pizzaSize, quantity: 1 }))
      }
    }
    router.back()
  }

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      {pizza && (
        <View className="mt-4 flex flex-1 gap-y-2">
          <View className="flex flex-row gap-3">
            <Image source={{ uri: `${BASE_URL}/images/200_${pizza.photos[0].name}` }} className="w-32 h-32 rounded-full" />
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">{pizza.name}</Text>
              <Text className="text-gray-200 mt-1 flex-wrap">Склад: {pizza.ingredients.map((i) => i.name).join(', ')}</Text>
              <Text className="text-gray-500 mt-1 flex-wrap">Опис: {pizza.description}</Text>
            </View>
          </View>

          <View>
            <Text className="text-red-500 text-lg font-bold">{price.toFixed()} грн</Text>
          </View>
          <View>
            <SizeSelector size={size} sizes={pizza.sizes} setPrice={setPrice} setSize={setSize} />
          </View>

          <View className="flex-1 justify-end gap-y-2">
            <CustomButton
              handlePress={() => router.back()}
              title="Скасувати"
              className="bg-gray-500 min-h-0 py-1"
              textStyles="text-white"
            />
            <CustomButton handlePress={addPizzaToBasket} title="В кошик" className="bg-red-500" textStyles="text-white" />
          </View>
        </View>
      )}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default PizzaScreen
