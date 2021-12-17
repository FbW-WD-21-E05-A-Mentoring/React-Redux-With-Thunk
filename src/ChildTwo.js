import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const AsnycFetchUsers=()=>{
    return async (dispatch)=>{
        let res= await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await res.json()
        dispatch({type:"fetchUsers", payload:users})
    }
}


export default function ChildTwo() {
    const {y,users} = useSelector(state=>state)
    const dispatch = useDispatch()
   /*  useEffect(()=>{
        dispatch(AsnycFetchUsers())
    },[]) */

  /*   const fetchUsersData= ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users=>{
            dispatch({type:"fetchUsers",payload:users})
        })
    } */
    return (
        <div>
            <h1>This is Child Two Component</h1>
            <h2>Y : {y}, <button onClick={()=>dispatch({type:"incrementX"})}>Increment X</button></h2>
            <button onClick={()=>dispatch(AsnycFetchUsers())}>get more users</button>

            {/* <button onClick={fetchUsersData}>get more users</button> */}
            {users.map(user=>{
                return (<li key={user.id}>{user.name}</li>)
            })}
        </div>
    )
}
