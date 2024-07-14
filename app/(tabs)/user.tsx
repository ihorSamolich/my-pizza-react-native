import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import InfoBox from '@/components/InfoBox'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { removeFromSecureStore } from '@/utils/secureStore'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getUser, logOut } from '@/redux/slices/userSlice'
import { BASE_URL } from '@/constants/Urls'
import AppLogo from '@/components/AppLogo'

export default function UserScreen() {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const logout = async () => {
    await removeFromSecureStore('authToken')
    dispatch(logOut())
    router.replace('/sign-in')
  }

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />

      <View className="w-full flex justify-center items-center   mb-12 px-4">
        <TouchableOpacity onPress={logout} className="flex w-full items-end mb-10">
          <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
        </TouchableOpacity>

        <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
          <Image source={{ uri: `${BASE_URL}/images/200_${user?.photo}` }} className="w-[90%] h-[90%] rounded-lg" resizeMode="cover" />
        </View>

        <InfoBox title={`${user?.firstName} ${user?.lastName}`} containerStyles="mt-5" titleStyles="text-lg" />

        <View className="mt-5 flex flex-row">
          <InfoBox title={'123'} subtitle="Posts" titleStyles="text-xl" containerStyles="mr-10" />
          <InfoBox title="1.2k" subtitle="Followers" titleStyles="text-xl" />
        </View>
      </View>
    </SafeAreaView>
  )
}
