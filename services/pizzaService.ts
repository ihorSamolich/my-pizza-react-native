import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import { IPizza } from '@/interfaces/pizza'
import { IPagedDataResponse } from '@/interfaces'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: createBaseQuery('pizza'),
  tagTypes: ['Pizzas'],

  endpoints: (builder) => ({
    getAllPizzas: builder.query<IPizza[], void>({
      query: () => 'getAll',
      providesTags: ['Pizzas'],
    }),

    getPizzaById: builder.query<IPizza, number>({
      query: (id) => `getById/${id}`,
      providesTags: (_result, _error, arg) => [{ type: 'Pizzas', id: arg }],
    }),

    getPizzasByCategory: builder.query<IPagedDataResponse<IPizza>, { id: number; name: string }>({
      query: ({ id, name }) => {
        return `getPage?${name ? `&name=${name}&` : ''}categoryId=${id}`
      },
      providesTags: ['Pizzas'],
    }),
  }),
})

export const { useGetAllPizzasQuery, useGetPizzaByIdQuery, useGetPizzasByCategoryQuery } = pizzaApi
