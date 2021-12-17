
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"

//Context APi 
//createContext => createContext(default value)

//redux 
//createStore
import {createStore,applyMiddleware} from "redux"


//import provider from react-redux
import {Provider} from "react-redux"

//import thunk to handle asynchronous actions
import thunk from "redux-thunk"


/* const getUsers= async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()
    return users
}
 */

const initialState=
{x: 10, 
y:3 ,
users:[]}
//create Reducer Function
const Reducer =(state=initialState, action)=>{
    switch(action.type){
        case "incrementY":
            return {...state, y:state.y+1}
        case "incrementX":
            return {...state,x:state.x+1}

        case "fetchUsers":
           return {...state, users:action.payload}
        default:
            return state
    }
}
const mystore = createStore(Reducer, applyMiddleware(thunk))


//Context Api => use context provider
// Context.Provide value={}



reactDOM.render(<Provider store = {mystore}><App/> </Provider> ,document.getElementById("root"))