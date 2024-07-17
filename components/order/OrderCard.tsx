import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { IUserOrder } from '@/interfaces/basket'

interface OrderCardProps {
  order: IUserOrder
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <View className="bg-gray-800 p-4 rounded-lg mb-4">
      <View>
        <Text className="text-white text-xl font-bold">
          Замовлення #{new Date(order.dateCreated).getTime().toString().slice(5, 10)}
        </Text>
        <Text className="text-gray-400">Дата: {new Date(order.dateCreated).toLocaleDateString()}</Text>
        <Text className="text-gray-400">Адреса доставки: {order.isDelivery ? `${order.deliveryAddress}` : 'Самовивіз'}</Text>
        <Text className="text-red-500 text-lg font-bold mt-2">Загальна сума: {order.totalAmount.toFixed()} грн</Text>
      </View>
      <FlatList
        data={order.orderItems}
        renderItem={({ item }) => (
          <View className="flex flex-row items-center ">
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">{item.pizza.name}</Text>
              <Text className="text-gray-400">
                {item.sizePrice.sizeName} см - {item.sizePrice.price.toFixed()} грн
              </Text>
              <Text className="text-gray-400">Кількість: {item.quantity}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.pizzaId.toString() + item.pizzaSizeId.toString()}
      />
    </View>
  )
}

export default OrderCard
