import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IPizzaSize } from '@/interfaces/pizza'

type SizeSelectorProps = {
  sizes: IPizzaSize[]
  size: string
  setSize: (size: string) => void
  setPrice: (price: number) => void
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, size, setSize, setPrice }) => {
  const sortedSizes = sizes?.slice().sort((a, b) => {
    return Number(a.sizeName) - Number(b.sizeName)
  })

  const handleSelectSize = (size: IPizzaSize) => {
    setSize(size.sizeName)
    setPrice(size.price)
  }

  return (
    <View className="flex-row justify-between bg-gray-800 rounded-lg p-1">
      {sortedSizes.map((pizzaSize) => (
        <TouchableOpacity
          key={pizzaSize.sizeId}
          className={`flex-1 p-2 rounded ${size === pizzaSize.sizeName ? 'bg-secondary' : ''}`}
          onPress={() => handleSelectSize(pizzaSize)}>
          <Text className={`text-center ${size === pizzaSize.sizeName ? 'text-black' : 'text-white'}`}>{pizzaSize.sizeName} см</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SizeSelector
