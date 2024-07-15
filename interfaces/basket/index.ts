import { IPizza, IPizzaSize } from '@/interfaces/pizza'

export interface IBasketState {
  pizzas: IBasketPizza[]
}

export interface IBasketPizza {
  pizza: IPizza
  size: IPizzaSize
  quantity: number
}
