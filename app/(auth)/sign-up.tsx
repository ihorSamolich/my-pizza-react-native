import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FormField from '@/components/FormField'

import { useRegisterMutation } from '@/services/accountService'
import { getFileFromUri } from '@/utils/getFileFromUri'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { images } from '@/constants'
import Ionicons from '@expo/vector-icons/Ionicons'
import { saveToSecureStore } from '@/utils/secureStore'
import { setCredentials } from '@/redux/slices/userSlice'
import { jwtParse } from '@/utils/jwtParser'
import { IUser } from '@/interfaces/account'
import { useAppDispatch } from '@/redux/store'
import CustomModal from '@/components/CustomModal'

const SignUp = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [image, setImage] = useState<string | null>(null)

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const [create, { isLoading }] = useRegisterMutation()
  const dispatch = useAppDispatch()

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const submit = async () => {
    try {
      const file = await getFileFromUri(image)

      const res = await create({
        firstName,
        lastName,
        email,
        password,
        // @ts-ignore
        image: file,
      }).unwrap()

      await saveToSecureStore('authToken', res.token)
      dispatch(setCredentials({ user: jwtParse(res.token) as IUser, token: res.token }))
      router.replace('/pizzas')
    } catch (error) {
      setModalVisible(true)
    }
  }

  return (
    <SafeAreaView className="bg-primary flex-1 ">
      <ScrollView>
        <View className="w-full h-full flex justify-center items-center px-4">
          <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} text="Помилка реєстрації!" onClose={() => {}} />

          <View className="flex flex-row items-center justify-center">
            <Image source={images.pizzaLogo} className=" w-[40px] h-[34px]" resizeMode="contain" />
            <Text className="mt-2 text-4xl font-pbold font-bold text-secondary">MYPIZZA</Text>
          </View>

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">Sign Up to My Pizza</Text>

          <FormField
            placeholder="Enter your first name"
            title="First Name"
            value={firstName}
            handleChangeText={(e) => setFirstName(e)}
            otherStyles="mt-7"
          />

          <FormField
            placeholder="Enter your last name"
            title="Last Name"
            value={lastName}
            handleChangeText={(e) => setLastName(e)}
            otherStyles="mt-7"
          />

          <FormField
            placeholder="Enter your email"
            title="Email"
            value={email}
            handleChangeText={(e) => setEmail(e)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            placeholder="Enter last password"
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            otherStyles="mt-7"
          />

          <View className="space-y-2 w-full">
            <TouchableOpacity onPress={pickImage} className="mt-4 p-4 bg-gray-100 rounded-xl">
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-center text-white font-psemibold">Pick an Image</Text>
                <Ionicons name="image" size={24} color="white" />
              </View>
            </TouchableOpacity>
            {image && (
              <View className="w-full flex justify-center items-center">
                <Image source={{ uri: image }} className="w-40 h-40 rounded-full" />
              </View>
            )}
          </View>

          <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7 w-full" isLoading={isLoading} />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100 font-pregular">Have an account already?</Text>
            <Link href="/sign-in" className="text-sm font-psemibold text-secondary">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
