import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import { IOrder, IUserOrder } from '@/interfaces/basket'
import { IPagedDataResponse } from '@/interfaces'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: createBaseQuery('Order'),
  tagTypes: ['Orders'],

  endpoints: (builder) => ({
    getAllOrders: builder.query<IUserOrder[], void>({
      query: () => 'getAll',
      providesTags: ['Orders'],
    }),

    getPageOrders: builder.query<IPagedDataResponse<IUserOrder>, string>({
      query: (token) => {
        return {
          url: 'getPage',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      },
      providesTags: ['Orders'],
    }),

    createOrder: builder.mutation<void, IOrder>({
      query: (data) => {
        return {
          url: 'Create',
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      },
      invalidatesTags: ['Orders'],
    }),
  }),
})

export const { useCreateOrderMutation, useGetAllOrdersQuery, useGetPageOrdersQuery } = orderApi
