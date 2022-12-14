import { BASE_URL } from '../constants'
import { Country } from '../types'

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${BASE_URL}/all`)
  const data = await response.json()
  return data
}
