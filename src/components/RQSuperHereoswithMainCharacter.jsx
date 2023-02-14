import React from 'react'
import useSuperHeroesWithMainCharacter from '../Hooks/useSuperHeroesWithMainCharacter';

export default function RQSuperHereoswithMainCharacter() {


  const {data, isLoading, isError, error, isFetching} = useSuperHeroesWithMainCharacter();

    if (isLoading || isFetching) {
        return <div>Loading....</div>
    }

    if (isError) {
        return <div>{error}</div>
    }

  return (
    <>
    <h2>React Query SuperHeroes with Their Casts</h2>
    <ul>
        {
            data.map(d => {
                return <li key={d.name}>{d.name} : {d.cast}</li>
            }) 
        }
    </ul>
    
    </>
  )
}
