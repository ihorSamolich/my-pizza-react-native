import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface CustomCheckBoxProps {
  title: string
  isChecked: boolean
  onPress: () => void
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ title, isChecked, onPress }) => {
  return (
    <TouchableOpacity className={`flex-row items-center mb-2`} onPress={onPress}>
      <View
        className={`w-6 h-6 rounded-md border-2 items-center justify-center mr-2 ${isChecked ? 'bg-secondary border-secondary' : 'border-gray-400'}`}>
        {isChecked && <Ionicons name="checkmark" size={20} color="white" />}
      </View>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomCheckBox
