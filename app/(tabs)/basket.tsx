import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '@/components/EmptyState'
import AppLogo from '@/components/AppLogo'
import { Animated, View } from 'react-native'
import FlatList = Animated.FlatList
import { useAppSelector } from '@/redux/store'
import { getBasketPizzas } from '@/redux/slices/basketSlice'
import PizzaBasketCard from '@/components/pizza/PizzaBasketCard'

export default function BasketScreen() {
  const pizzas = useAppSelector(getBasketPizzas)

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      {pizzas.length === 0 && <EmptyState title="Кошик порожній" subtitle="Додайте піцу до кошика, щоб зробити замовлення !" />}

      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="m-2">
            <PizzaBasketCard pizza={item} />
          </View>
        )}
      />

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
