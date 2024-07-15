import { createSlice } from '@reduxjs/toolkit'
import { IBasketPizza, IBasketState } from '@/interfaces/basket'

const initialState: IBasketState = {
  pizzas: [],
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addToBasket: (state, action: { payload: IBasketPizza }) => {
      const newPizza = action.payload

      const existingPizza = state.pizzas.find((item) => item.pizza.id === newPizza.pizza.id && item.size.id === newPizza.size.id)

      if (existingPizza) existingPizza.quantity += 1
      else state.pizzas.push(newPizza)
    },
    removeFromBasket: (state, action: { payload: { pizzaId: number; sizeId: number } }) => {
      const { pizzaId, sizeId } = action.payload
      state.pizzas = state.pizzas.filter((item) => !(item.pizza.id === pizzaId && item.size.id === sizeId))
    },
    changePizzaQuantity: (state, action: { payload: IBasketPizza }) => {
      const { pizza, size, quantity } = action.payload
      const pizzaToUpdate = state.pizzas.find((item) => item.pizza.id === pizza.id && item.size.id === size.id)

      if (pizzaToUpdate) {
        pizzaToUpdate.quantity = quantity
      }
    },
    clearBasket: (state) => {
      state.pizzas = []
    },
  },
})

export const getBasketPizzas = (state: { pizza: IBasketState }) => state.pizza.pizzas
export const { addToBasket, clearBasket, changePizzaQuantity, removeFromBasket } = pizzaSlice.actions
export default pizzaSlice.reducer
