import { createApi } from '@reduxjs/toolkit/query/react'
import { ICategory } from '@/interfaces/category'
import { createBaseQuery } from '@/utils/createBaseQuery'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: createBaseQuery('categories'),
  tagTypes: ['Categories'],

  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategory[], void>({
      query: () => 'getAll',
      providesTags: ['Categories'],
    }),

    getCategoryById: builder.query<ICategory, number>({
      query: (id) => `getById/${id}`,
      providesTags: (_result, _error, arg) => [{ type: 'Categories', id: arg }],
    }),
  }),
})

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery } = categoryApi
