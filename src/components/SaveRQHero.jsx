import React, { useState } from 'react'
import useSuperHeroesHooks, { useAddSuperHeroData } from '../Hooks/useSuperHeroesHooks';
import { Link } from 'react-router-dom';
export default function SaveRQHero() {

    
    
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    
    
    const onError = (error) => {
        console.log("Error : ", error);
    }
    
    const onSuccess = (data) => {
        console.log("Success : ", data);
    }
    
    const {data, isLoading, isError, error, isFetching, refetch} = useSuperHeroesHooks({onSuccess, onError});

    const {mutate : addSuperHero, isLoading : savingHero, isError : errorSavingHero, error : heroSavingError} = useAddSuperHeroData()
    const handleAddHeroClick = () => {
    console.log({ name, alterEgo })
    addSuperHero({name, alterEgo})
    }




  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
        {savingHero && <span>Saving...</span>}
        {errorSavingHero && <span>Error : {heroSavingError}</span>}
      </div>
      <button className='mt-3 mb-3' onClick={refetch}>Fetch heroes</button>
      {data?.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/superHero/${hero.id}`}>
              {hero.id} {hero.name}
            </Link>
          </div>
        )
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })} */}   
    </>
  )
}
