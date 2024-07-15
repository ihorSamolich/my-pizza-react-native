import { ICategory } from '@/interfaces/category'
import { IPhoto } from '@/interfaces'
import { IIngredient } from '@/interfaces/ingradients'

export interface IPizza {
  id: number
  name: string
  description: string
  rating: number
  isAvailable: boolean
  category: ICategory
  photos: IPhoto[]
  ingredients: IIngredient[]
  sizes: IPizzaSize[]
}

export interface IPizzaSize {
  id: number
  sizeId: number
  sizeName: string
  price: number
}
