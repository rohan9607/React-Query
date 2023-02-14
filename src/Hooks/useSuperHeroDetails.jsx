import axios from 'axios'
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'


const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1]
 return  axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export default function useSuperHeroDetails(heroId) {

  const queryClient  = useQueryClient()

  return useQuery(
    ['super-heroes-details', heroId],
    fetchSuperHero, 
    {
      initialData : () => {
        const hero = queryClient.
          getQueryData('super-heroes')?.data?.find(hero => hero?.id === parseInt(heroId))

          if (hero) {
            return hero;
          }else{
            return undefined;
          }
      }
    }
  )
}
