import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext()
  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const submit = async () => {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center items-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 100,
          }}>
          <View className="flex flex-row items-center justify-center">
            <Image
              source={images.pizzaLogo}
              className=" w-[40px] h-[34px]"
              resizeMode="contain"
            />
            <Text className="mt-2 text-4xl font-pbold font-bold text-secondary">
              MYPIZZA
            </Text>
          </View>

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to My Pizza
          </Text>

          <FormField
            placeholder="Enter your email"
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            placeholder="Enter your password"
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary">
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
