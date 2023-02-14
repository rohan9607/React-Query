import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

export default function useSuperHeroesHooks({onSuccess, onError}) {

    const fetchSuperHeroes = () => {
        return axios.get("http://localhost:4000/superheroes")
      }

  return useQuery(
    'super-heroes', 
    fetchSuperHeroes,
    {
      select : (data) => {
        let onlyNames = data.data.map(hero => {
            let id = hero.id
            let name = hero.name
            return {id, name}
        });
        return onlyNames
      },
      onSuccess,
      onError
    }
  )
}
