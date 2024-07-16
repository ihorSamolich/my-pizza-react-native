import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppLogo from '@/components/AppLogo'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import FormField from '@/components/FormField'
import CustomCheckBox from '@/components/CustomCheckBox'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { clearBasket, getBasketPizzas } from '@/redux/slices/basketSlice'
import { getToken } from '@/redux/slices/userSlice'
import { useCreateOrderMutation } from '@/services/orderService'
import { IOrderItem } from '@/interfaces/basket'

export default function OrderScreen() {
  const [phone, setPhone] = React.useState('')
  const [name, setName] = React.useState('')

  const [deliveryAddress, setDeliveryAddress] = React.useState('')
  const [isDelivery, setIsDelivery] = React.useState(false)

  const pizzas = useAppSelector(getBasketPizzas)
  const dispatch = useAppDispatch()
  const token = useAppSelector(getToken)

  const [createOrder] = useCreateOrderMutation()

  const totalPrice = pizzas.reduce((acc, pizza) => acc + pizza.quantity * pizza.size.price, 0)

  const handleCreateOrder = async () => {
    if (!checkRequiredFields()) {
      return
    }

    const orderItems: IOrderItem[] = pizzas.map((pizza) => {
      return {
        pizzaId: pizza.pizza.id,
        quantity: pizza.quantity,
        pizzaSizeId: pizza.size.id,
      }
    })

    try {
      await createOrder({ orderItems, deliveryAddress, isDelivery, token }).unwrap()
      router.push('/pizzas')
      dispatch(clearBasket())
    } catch (error) {
      console.log(error)
    }
  }

  const checkRequiredFields = () => {
    if (pizzas.length === 0) {
      return false
    }

    if (isDelivery && !deliveryAddress.trim()) {
      return false
    }

    return !(!phone.trim() || !name.trim())
  }

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      <View className="mt-4 flex flex-1">
        <View className="flex flex-1">
          <FormField
            otherStyles="mb-2"
            placeholder="Enter your name"
            title="Your name"
            value={name}
            handleChangeText={(e) => setName(e)}
          />
          <FormField
            otherStyles="mb-2"
            placeholder="Enter your phone"
            title="Your phone"
            value={phone}
            handleChangeText={(e) => setPhone(e)}
          />
          <CustomCheckBox title="Delivery" isChecked={isDelivery} onPress={() => setIsDelivery(!isDelivery)} />
          {isDelivery && (
            <FormField
              placeholder="Enter your address"
              title="Delivery address"
              value={deliveryAddress}
              handleChangeText={(e) => setDeliveryAddress(e)}
            />
          )}
        </View>

        <View className="h-20 flex items-center justify-center">
          <Text className="text-xl text-gray-100 font-pmedium">{`Загальна сума замовлення: ${totalPrice.toFixed()} $`}</Text>
        </View>

        <View className=" justify-end gap-y-2 bg-primary">
          <CustomButton
            handlePress={() => router.back()}
            title="Повернутися до кошика"
            className="bg-red-600 min-h-0 py-1"
            textStyles="text-white"
          />
          <CustomButton
            isDisabled={!checkRequiredFields()}
            handlePress={handleCreateOrder}
            title="Оформити замовлення"
            className="bg-secondary"
            textStyles="text-white"
          />
        </View>
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
