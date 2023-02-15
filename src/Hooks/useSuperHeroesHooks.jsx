import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../Axios';
const fetchSuperHeroes = () => {
  return request({url : "/superheroes", method : 'get'})
}

const addSuperHero = (hero) => {
  return request({url : "/superheroes", method : 'post', data : hero});
}
export default function useSuperHeroesHooks({onSuccess, onError}) {
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess : (data) => {
    //   // queryClient.invalidateQueries("super-heroes")
    //   queryClient.setQueryData("super-heroes", (oldData) => {
    //     return {
    //       ...oldData,
    //       data : [...oldData.data , data.data]
    //     }
    //   })
    // }

    onMutate : async (newHero) => {
      // First Cancel out query that will be affected by mutation
      queryClient.cancelQueries("super-heroes")
      // get old data in case there is error then we can display old data without having any issues
      const previousData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldData) => {
        return {
          ...previousData,
          data : [...oldData.data, {id : previousData?.data?.length + 1, ...newHero}]
        }

      // In case there is error we can get old data in onError by returning it from this function 
    }
    )
    return {previousData};

    },
    onError : (error, hero, context) => {
      queryClient.setQueryData('super-heroes', context.previousData)
    },
    // This function will be called even if there error or success
    onSettled : () => {
      queryClient.invalidateQueries("super-heroes")
    }, 
  });
}