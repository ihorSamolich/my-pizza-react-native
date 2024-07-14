import { Animated, Dimensions, Image, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'

import { useGetAllCategoriesQuery } from '@/services/categoryService'
import { images } from '@/constants'

import { StatusBar } from 'expo-status-bar'
import { useGetPizzasByCategoryQuery } from '@/services/pizzaService'
import PizzaCard from '@/components/pizza/PizzaCard'
import FlatList = Animated.FlatList
import CategoryButton from '@/components/category/CategoryButton'
import { ICategory } from '@/interfaces/category'
import EmptyState from '@/components/EmptyState'
import BasketButton from '@/components/BasketButton'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CategoriesScreen() {
  const [indexActive, setIndexActive] = useState<number>(0)
  const [categoriesWithAll, setCategoriesWithAll] = useState<ICategory[]>([])

  const { data: categories } = useGetAllCategoriesQuery()
  const { data: pizzas } = useGetPizzasByCategoryQuery(indexActive)

  useEffect(() => {
    if (categories) {
      setCategoriesWithAll([{ id: 0, name: 'All', image: 'default.png' }, ...categories])
    }
  }, [categories])

  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <View className="flex flex-row items-center justify-center">
        <Image source={images.pizzaLogo} className=" w-[60px] h-[60px]" resizeMode="contain" />
        <Text className="mt-4 text-5xl font-pbold font-bold text-secondary">MYPIZZA</Text>
      </View>

      {categories && (
        <View>
          <FlatList
            data={categoriesWithAll}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
            horizontal
            renderItem={({ item }) => (
              <CategoryButton key={item.id} item={item} isActive={indexActive === item.id} onPress={() => setIndexActive(item.id)} />
            )}
          />
        </View>
      )}
      {pizzas && (
        <View>
          <FlatList
            data={pizzas?.data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 10, paddingBottom: 180 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => <View className="w-[49%] h-full flex pb-5">{<PizzaCard pizza={item} />}</View>}
            ListEmptyComponent={() => (
              <EmptyState
                title="Не знайдено"
                subtitle={`Піци в категорії ${categoriesWithAll[indexActive].name} не знайдено. Перегляньте інші категорії !`}
              />
            )}
          />
        </View>
      )}

      <BasketButton />

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
