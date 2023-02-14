import React from 'react'
import { useParams } from 'react-router-dom';
import useSuperHeroDetails from '../Hooks/useSuperHeroDetails';

export default function SuperHeroDetails() {

    const {id}  = useParams()

    const {data, isLoading, isError, error, isFetching} = useSuperHeroDetails(id);


    if (isLoading) {
        return <h2>Loading.....</h2>
      }
    
      if (isError) {
        return <i>{error.message}</i>
      }

    // console.log({data});
  return (
    <>
    <p>Name : {data?.data?.name}</p>
    <p>Cast : {data?.data?.alterEgo}</p>
    </>
  )
}
