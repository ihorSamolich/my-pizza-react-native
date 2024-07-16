import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { categoryApi } from '@/services/categoryService'
import { pizzaApi } from '@/services/pizzaService'
import { accountApi } from '@/services/accountService'
import userReducer from './slices/userSlice'
import pizzaReducer from './slices/basketSlice'
import { orderApi } from '@/services/orderService'

export const store = configureStore({
  reducer: {
    user: userReducer,
    pizza: pizzaReducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, pizzaApi.middleware, accountApi.middleware, orderApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
