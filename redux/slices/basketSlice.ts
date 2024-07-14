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
  },
})

export const getBasketPizzas = (state: { pizza: IBasketState }) => state.pizza.pizzas
export const { addToBasket } = pizzaSlice.actions
export default pizzaSlice.reducer
