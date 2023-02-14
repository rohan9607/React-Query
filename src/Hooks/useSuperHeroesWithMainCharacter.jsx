import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function useSuperHeroesWithMainCharacter() {

    const fetchSuperHeroes = () => {
        return axios.get("http://localhost:4000/superheroes")
      }

  return useQuery(
    'super-heroes-casts',
    fetchSuperHeroes,
    {
        select : (data) => {
            let casts = data.data.map(h => {
                let name = h.name
                let cast = h.alterEgo

                return {name, cast}
            }
            )
            return casts;
        },
    }
  )
}
