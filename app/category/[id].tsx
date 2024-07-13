import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
import {
  useGetAllPizzasQuery,
  useGetPizzasByCategoryQuery,
} from '@/services/pizzaService'
import PizzaCard from '@/components/pizza/PizzaCard'
import { IPizza } from '@/interfaces/pizza'

const CategoryScreen = () => {
  const { id } = useLocalSearchParams()

  const { data, isLoading } = useGetPizzasByCategoryQuery(Number(id))

  if (isLoading) return <ThemedText>Loading...</ThemedText>
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
        {data?.data.length === 0 ? (
          <ThemedText style={styles.noResultsText}>
            Записів не знайдено
          </ThemedText>
        ) : (
          data?.data.map((pizza: IPizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))
        )}
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
    backgroundColor: 'transparent',
  },
  noResultsText: {
    padding: 20,
    backgroundColor: '#a4a4a4',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default CategoryScreen
