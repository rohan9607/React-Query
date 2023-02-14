import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query';


const fetchColors = ({ pageParam = 1 }) => {
    return axios.get("http://localhost:4000/colors?_limit=4&_page="+pageParam)
}


export default function InfiniteQueries() {
    const [pageNumber, setPageNumber] = useState(1)
    
    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage
      } = useInfiniteQuery(['colors'], fetchColors,
      {
        getNextPageParam : (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
              } else {
                return undefined
              }
        }
      }
      );

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
            {data?.pages.map((grp, i) => {
          return (
            <Fragment key={i}>
                {
                    grp?.data?.map(color => {
                        return (
                            <div key={color.id}>
                            <h2>
                              {color.id}. {color.label}
                            </h2>
                          </div>
                        )
                    })
                }

            </Fragment>
          )
        })}
            </div>
            <div>
                <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage}
                >
                Load More
                </button>
            </div>
            {isFetching && <span>Fetching....</span>}
      </div>

    </>
  )
}
