import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';


const fetchColors = ({queryKey}) => {
    const pageNumber = queryKey[1]
    return axios.get("http://localhost:4000/colors?_limit=2&_page="+pageNumber)
}


export default function PaginatedQueries() {
    const [pageNumber, setPageNumber] = useState(1)
    
    const {data, isLoading, isError, error, isFetching} = useQuery(['colors', pageNumber], fetchColors, {keepPreviousData : true});

    const onError = (error) => {
        console.log("Error : ", error);
      }
    
      const onSuccess = (data) => {
        console.log("Success : ", data);
      }
    

  return (
    <>
          <div className='d-flex flex-column justify-content-center align-content-center'>
            <div>
            {data?.data.map(color => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          )
        })}
            </div>
            <div>
                <button
                onClick={() => pageNumber > 1 && setPageNumber(prev => prev - 1)}
                disabled={pageNumber === 1}
                >
                Prev
                </button>
                
                <button
                onClick={() => pageNumber < 5 && setPageNumber(prev => prev + 1)}
                disabled={pageNumber === 4}
                >
                    Next
                </button>
            </div>
            {isFetching && <span>Fetching....</span>}
      </div>

    </>
  )
}
