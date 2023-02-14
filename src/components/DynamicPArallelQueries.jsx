import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'


const fetchMultipleHeroes = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}


export default function DynamicPArallelQueries() {
    const ids =  [1,2,3] 
    const queryResults = useQueries(
        ids.map(id => {
            return { 
                queryKey : ['super-hero', id],
                queryFn : () => fetchMultipleHeroes(id)
            }
        })
    )

    console.log({queryResults});


  return (
    <div>DynamicPArallelQueries</div>
  )
}
