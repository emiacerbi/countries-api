import { BASE_URL } from '../constants'
import { Country } from '../types'

export const getCountryByCode = async (name: string): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/alpha/${name}`)
  const data = await response.json()
  return data
}
