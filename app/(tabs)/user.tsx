import { FlatList, Image, View } from 'react-native'
import React from 'react'
import InfoBox from '@/components/InfoBox'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { removeFromSecureStore } from '@/utils/secureStore'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getUser, logOut } from '@/redux/slices/userSlice'
import { BASE_URL } from '@/constants/Urls'
import AppLogo from '@/components/AppLogo'
import CustomButton from '@/components/CustomButton'
import { useGetAllOrdersQuery } from '@/services/orderService'
import OrderCard from '@/components/order/OrderCard'

export default function UserScreen() {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const { data: orders } = useGetAllOrdersQuery()

  const logout = async () => {
    await removeFromSecureStore('authToken')
    dispatch(logOut())
    router.replace('/sign-in')
  }

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      <View className="mt-4 flex flex-1 gap-y-2">
        <View className=" w-full items-center">
          <Image
            source={{ uri: `${BASE_URL}/images/200_${user?.photo}` }}
            className="w-20 h-20 border border-secondary rounded-full  "
            resizeMode="cover"
          />
        </View>

        <InfoBox title={`${user?.firstName} ${user?.lastName}`} containerStyles="mt-5" titleStyles="text-lg" />

        <InfoBox title="Мої замовлення" titleStyles="text-2xl text-secondary font-bold" />

        <FlatList data={orders} keyExtractor={(order) => order.id.toString()} renderItem={({ item }) => <OrderCard order={item} />} />

        <View className=" justify-end gap-y-2 bg-primary">
          <CustomButton handlePress={logout} title="Вийти" className="bg-red-600" textStyles="text-white" />
        </View>
      </View>
    </SafeAreaView>
  )
}
