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

interface IOrderSizePrice {
  id: number
  sizeId: number
  sizeName: string
  price: number
}

export interface IUserOrderItem {
  pizzaId: number
  pizzaSizeId: number
  quantity: number
  pizza: IPizza
  sizePrice: IOrderSizePrice
}

export interface IUserOrder {
  id: number
  totalAmount: number
  deliveryAddress: string
  isDelivery: boolean
  dateCreated: string
  orderItems: IUserOrderItem[]
}
