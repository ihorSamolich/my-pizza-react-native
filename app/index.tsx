import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { getValueForSecureStore } from '@/utils/secureStore'
import { jwtParse } from '@/utils/jwtParser'
import { setCredentials } from '@/redux/slices/userSlice'
import { IUser } from '@/interfaces/account'
import { useAppDispatch } from '@/redux/store'

const Welcome = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getValueForSecureStore('authToken')
      .then((res) => {
        if (res) {
          dispatch(setCredentials({ user: jwtParse(res) as IUser, token: res }))
          router.push('/pizzas')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}>
        <View className=" w-full flex items-center justify-center gap-y-10 h-full px-4 py-20">
          <View className="flex flex-row items-center justify-center">
            <Image source={images.pizzaLogo} className=" w-[60px] h-[60px]" resizeMode="contain" />
            <Text className="mt-4 text-5xl font-pbold font-bold text-secondary">MYPIZZA</Text>
          </View>

          <Image source={images.pizzaWelcome} className="max-w-[380px] w-full h-[150px]" resizeMode="contain" />

          <Text className="text-3xl text-white font-bold text-center">
            Discover Delicious{'\n'}
            Flavors with <Text className="text-secondary-200">My Pizza</Text>
          </Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default Welcome
