import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const CategoryScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          resizeMode="cover"
          source={{
            uri: 'https://assets.caseys.com/m/74a6af2ca66142c3/original/Specialty-Pizza-Category-Banner.jpg',
          }}
          style={styles.screenLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText>Category ID page</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}
const styles = StyleSheet.create({
  screenLogo: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})

export default CategoryScreen
