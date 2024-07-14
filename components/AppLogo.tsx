import { Image, Text, View } from 'react-native'
import { images } from '@/constants'
import React from 'react'

const AppLogo = () => {
  return (
    <View className="flex flex-row items-center justify-center">
      <Image source={images.pizzaLogo} className=" w-[60px] h-[60px]" resizeMode="contain" />
      <Text className="mt-4 text-5xl font-pbold font-bold text-secondary">MYPIZZA</Text>
    </View>
  )
}

export default AppLogo
