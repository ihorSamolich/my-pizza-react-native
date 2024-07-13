import { Image, View } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          resizeMode="cover"
          source={{
            uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
          }}
          className=" h-full"
        />
      }>
      <View className="text-3xl bg-primary p-5 ">
        <ThemedText className="text-secondary font-pmedium">
          Open up App.js to start working on your app!
        </ThemedText>
      </View>
    </ParallaxScrollView>
  )
}
