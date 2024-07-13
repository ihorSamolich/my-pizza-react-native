import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

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
        name="index"
        options={{
          title: 'Головна',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: 'Піца',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'pizza' : 'pizza-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: 'Реєстрація',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />

      {/*{login ? (*/}
      {/*  <Tabs.Screen*/}
      {/*    name="login"*/}
      {/*    options={{*/}
      {/*      title: 'Реєстрація',*/}
      {/*      tabBarIcon: ({ color, focused }) => (*/}
      {/*        <TabBarIcon*/}
      {/*          name={focused ? 'person' : 'person-outline'}*/}
      {/*          color={color}*/}
      {/*        />*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <Tabs.Screen*/}
      {/*    name="login"*/}
      {/*    options={{*/}
      {/*      title: 'Аккаунт',*/}
      {/*      tabBarIcon: ({ color, focused }) => (*/}
      {/*        <TabBarIcon*/}
      {/*          name={focused ? 'person' : 'person-outline'}*/}
      {/*          color={color}*/}
      {/*        />*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </Tabs>
  )
}
