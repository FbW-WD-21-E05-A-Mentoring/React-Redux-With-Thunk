import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"

/* class ChildOne extends React.Component {
 render(){
      return (
         <div>
             <h1>This is Child One Component</h1>
             <h2>X : {this.props.x}, <button onClick={()=>this.props.dispatch({type:"incrementY"})}>Increment Y</button></h2>
         </div>
     )
 }
    
 }
export default connect(state=>state)(ChildOne) */


export default function ChildOne() {
//     const state = useSelector((state)=>state) 
//     const x = useSelector((state)=>state.x) 
    const {x} = useSelector((state)=>state)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is Child One Component</h1>
            <h2>X : {x}, <button onClick={()=>dispatch({type:"incrementY"})}>Increment Y</button></h2>
        </div>
    )
}
