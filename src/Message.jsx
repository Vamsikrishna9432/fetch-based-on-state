import React from 'react'
import  {useQuery, gql} from "@apollo/client"
import  "./index.css"

const GET_ME = gql`
query Messages($limit : Int) {
    messages(limit : $limit) {
      items {
        id
        subject
      }
    }
  }
`;

const Message = (props) => {

    const {loading,error,data} = useQuery(GET_ME,{variables: {limit : props.count}}) 

    if (loading) return <p>...Loading</p>
    if (error) return <p>{error.message}</p>
  return (
    <div className='boxes'>
        {data?.messages?.items?.map((e,index) => (<h1 className={index%2 == 0 ? "box" : "box1"}>{index} : {e.id}</h1>))}
    </div>
  )
}

export default Message