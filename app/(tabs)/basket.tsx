import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '@/components/EmptyState'
import AppLogo from '@/components/AppLogo'
import { Animated, View } from 'react-native'
import FlatList = Animated.FlatList
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { clearBasket, getBasketPizzas } from '@/redux/slices/basketSlice'
import PizzaBasketCard from '@/components/pizza/PizzaBasketCard'
import CustomButton from '@/components/CustomButton'
import { useCreateOrderMutation } from '@/services/orderService'
import { IOrder, IOrderItem } from '@/interfaces/basket'
import { getToken } from '@/redux/slices/userSlice'
import { router } from 'expo-router'

export default function BasketScreen() {
  const pizzas = useAppSelector(getBasketPizzas)
  const dispatch = useAppDispatch()

  const handleCreateOrder = async () => {
    router.push('/order')
  }

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      <View className="mt-4 flex flex-1 gap-y-2">
        {pizzas.length === 0 && <EmptyState title="Кошик порожній" subtitle="Додайте піцу до кошика, щоб зробити замовлення !" />}

        <FlatList
          data={pizzas}
          keyExtractor={(item) => item.pizza.name + item.size.sizeName}
          renderItem={({ item }) => (
            <View className="my-2">
              <PizzaBasketCard pizza={item} />
            </View>
          )}
        />

        <View className=" justify-end gap-y-2 bg-primary">
          <CustomButton
            handlePress={() => dispatch(clearBasket())}
            title="Очистити кошик"
            className="bg-red-600 min-h-0 py-1"
            textStyles="text-white"
          />
          <CustomButton
            isDisabled={pizzas.length === 0}
            handlePress={handleCreateOrder}
            title="Перейти до оформлення"
            className="bg-secondary"
            textStyles="text-white"
          />
        </View>
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
