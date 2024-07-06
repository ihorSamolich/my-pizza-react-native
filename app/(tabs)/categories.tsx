import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import useCategories from '@/hooks/categories/useCategories'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { BASE_URL } from '@env'
export default function CategoriesScreen() {
  const { data: categories, isLoading, isError } = useCategories()

  if (isLoading) return <ThemedText>Loading...</ThemedText>
  if (isError) return <ThemedText>Error</ThemedText>

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          resizeMode="cover"
          source={{
            uri: 'https://assets.caseys.com/m/74a6af2ca66142c3/original/Specialty-Pizza-Category-Banner.jpg',
          }}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        {categories?.map((category) => (
          <ThemedView key={category.id} style={styles.container}>
            <Image
              source={{
                uri: `${BASE_URL}images/200_${category.image}`,
              }}
              style={styles.categoryImage}
            />
            <ThemedText style={styles.title}>{category.name}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pizzaContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  categoryImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
})
