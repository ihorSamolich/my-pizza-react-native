import { IPizza, IPizzaSize } from '@/interfaces/pizza'

export interface IBasketState {
  pizzas: IBasketPizza[]
}

export interface IBasketPizza {
  pizza: IPizza
  size: IPizzaSize
  quantity: number
}

export interface IOrderItem {
  pizzaId: number
  pizzaSizeId: number
  quantity: number
}

export interface IOrder {
  orderItems: IOrderItem[]
  deliveryAddress: string
  isDelivery: boolean
  token: string | null
}
