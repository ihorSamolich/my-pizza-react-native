import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '@/components/EmptyState'
import AppLogo from '@/components/AppLogo'

export default function BasketScreen() {
  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <AppLogo />
      <EmptyState title="Кошик порожній" subtitle="Додайте піцу до кошика, щоб зробити замовлення !" />

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
