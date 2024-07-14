import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffa001',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopColor: '#232533',
          borderTopWidth: 1,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="pizzas"
        options={{
          title: 'Піца',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'pizza' : 'pizza-outline'} color={color} />,
        }}
      />

      <Tabs.Screen
        name="basket"
        options={{
          title: 'Кошик',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'basket' : 'basket-outline'} color={color} />,
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: 'Профіль',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />,
        }}
      />
    </Tabs>
  )
}
