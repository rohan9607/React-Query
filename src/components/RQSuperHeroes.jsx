import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import useSuperHeroesHooks from '../Hooks/useSuperHeroesHooks';

export default function RQSuperHeroes() {

  const onError = (error) => {
    console.log("Error : ", error);
  }

  const onSuccess = (data) => {
    console.log("Success : ", data);
  }




  const {data, isLoading, isError, error, isFetching} = useSuperHeroesHooks({onSuccess, onError});


  console.log({isLoading, isFetching});
  // console.log({data});
  if (isLoading) {
    return <h2>Loading.....</h2>
  }

  if (isError) {
    return <i>{error.message}</i>
  }
  return (
    <>
    <h2>React Query Super Heroes</h2>
    {/* <button onClick={refetch}>Refetch</button> */}
    <ul>
    {/* {data?.data?.map((item, idx) => {
      return <li key={idx}>{item.name}</li>
    })} */}
    {data?.map((item, idx) => {
      return <Link to={`/superHero/${item.id}`}>
      <li key={idx}>{item.name}</li>
      </Link>
    })}
    </ul>
    </>
  )
}
