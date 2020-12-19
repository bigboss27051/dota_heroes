import httpClient from '../plugins/axios'
import IHero from '../interfaces/hero'

export const getHeroes = async (): Promise<IHero[]> => {
  const response = await httpClient.get('/api/heroes')
  const { data = [] } = response
  return data
}
