import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import useCategories from '@/hooks/categories/useCategories'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import CategoryItem from '@/components/category/CategoryItem'
import { ICategory } from '@/interfaces/category'
import usePizzasByCategory from '@/hooks/pizza/usePizzasByCategory'
export default function CategoriesScreen() {
  const { data: categories, isLoading, isError, error } = useCategories()

  const { data: pizzas } = usePizzasByCategory(1)

  console.log(pizzas)

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
          style={styles.screenLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText style={styles.title}>Обрати категорію</ThemedText>
        </ThemedView>

        {categories?.map((category: ICategory) => (
          <CategoryItem key={category.id} category={category} />
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
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  screenLogo: {
    height: '100%',
    width: '100%',
  },

  headerContainer: {
    backgroundColor: '#f3ff00',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    transform: [{ rotate: '-5deg' }],
  },
})
