import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { BASE_URL } from '@env'
import { IPizza } from '@/interfaces/pizza'

const usePizzasByCategory = (
  categoryId: number,
): UseQueryResult<IPizza[], Error> => {
  return useQuery('pizzas', async () => {
    const response = await axios.get(`${BASE_URL}/api/categories/getAll`)
    return response.data as IPizza[]
  })
}

export default usePizzasByCategory
