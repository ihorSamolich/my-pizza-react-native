import { createSlice } from '@reduxjs/toolkit'
import { IBasketState } from '@/interfaces/basket'
import { IPizza } from '@/interfaces/pizza'

const initialState: IBasketState = {
  pizzas: [],
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addToBasket: (state, action: { payload: IPizza }) => {
      const pizza = action.payload
      state.pizzas.push(pizza)
    },
    removeFromBasket: (state, action: { payload: number }) => {
      const id = action.payload
      state.pizzas = state.pizzas.filter((pizza) => pizza.id !== id)
    },
  },
})

export const getBasketPizzas = (state: { pizza: IBasketState }) => state.pizza.pizzas
export const { addToBasket, removeFromBasket } = pizzaSlice.actions
export default pizzaSlice.reducer
