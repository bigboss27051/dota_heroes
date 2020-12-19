import { selector } from 'recoil'
import { getHeroes as getHeroesService } from '../services/heroes'
import IHero from '../interfaces/hero'

//selector
export const getHeroes = selector({
  key: 'getHeroes',
  get: async ({ get }) => {
    let heroes: Array<IHero> = []
    try {
      const results = await getHeroesService()
      if (results.length > 0) {
        heroes = [...results]
      }
      return heroes
    } catch (e) {
      console.log(e.message)
    }
    return heroes
  },
})
