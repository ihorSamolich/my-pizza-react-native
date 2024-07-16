import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import { IOrder } from '@/interfaces/basket'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: createBaseQuery('Order'),
  tagTypes: ['Orders'],

  endpoints: (builder) => ({
    // getAllOrders: builder.query<IOrder[], void>({
    //   query: () => 'getAll',
    //   providesTags: ['Orders'],
    // }),

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
    }),
  }),
})

export const { useCreateOrderMutation } = orderApi
