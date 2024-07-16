import React from 'react'
import { Stack } from 'expo-router'

const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name={'index'}
        options={{
          title: 'Замовлення',
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default OrderLayout
