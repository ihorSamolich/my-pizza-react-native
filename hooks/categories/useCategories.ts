import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { ICategory } from '@/interfaces/category'

const useCategories = (): UseQueryResult<ICategory[], Error> => {
  return useQuery('categories', async () => {
    const response = await axios.get(
      'https://mypizza-api.ihor88.click/api/categories/getAll',
    )
    return response.data as ICategory[]
  })
}

export default useCategories
