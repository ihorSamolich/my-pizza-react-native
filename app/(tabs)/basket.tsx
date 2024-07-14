import { Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import EmptyState from '@/components/EmptyState'

export default function BasketScreen() {
  return (
    <SafeAreaProvider>
      <View
        className="bg-primary w-full pt-8 px-4 "
        style={{
          minHeight: Dimensions.get('window').height,
        }}>
        <View className="flex flex-row items-center justify-center">
          <Image source={images.pizzaLogo} className=" w-[60px] h-[60px]" resizeMode="contain" />
          <Text className="mt-4 text-5xl font-pbold font-bold text-secondary">MYPIZZA</Text>
        </View>
        <EmptyState title="Кошик порожній" subtitle="Додайте піцу до кошика, щоб зробити замовлення !" />
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaProvider>
  )
}
