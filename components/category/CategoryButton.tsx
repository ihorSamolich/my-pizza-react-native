import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ICategory } from '@/interfaces/category'

interface CategoryButtonProps {
  item: ICategory
  isActive: boolean
  onPress: () => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ item, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex justify-center h-7 mr-1 px-4 py-1 rounded-full ${isActive ? 'bg-orange' : 'bg-secondary'}`}>
      <Text className="text-md font-pbold">{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton
