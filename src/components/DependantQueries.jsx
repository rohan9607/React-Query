import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';


const fetchUserbyEmail = ({queryKey}) => {
    const userId = queryKey[1]
    return axios.get("http://localhost:4000/users/"+ userId);
}
const fetchCoursesByChannelId = ({queryKey}) => {
    const channelId = queryKey[1]
    return axios.get("http://localhost:4000/channels/"+channelId);
}


export default function DependantQueries() {

    const email = "vishwas@example.com"
   const {data : user} =  useQuery(['user', email], fetchUserbyEmail)

   const channelId = user?.data?.channelId;

   const {data : channel} = useQuery(["channel", channelId], fetchCoursesByChannelId, {enabled : !!channelId})

  return (
    <>
    <h4>EMAIL : {email}</h4>
    <ul>
    {channel?.data?.courses?.map(item => {
        return <li>{item}</li>
    })}
    </ul>
    </>
  )
}
