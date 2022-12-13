import React from 'react'
import { addNum , subNum } from '../actions'
import {useSelector , useDispatch} from 'react-redux'


const ImplReducer = () => { 
  
  const counter = useSelector(state => state.modifiers)
  const dispatch = useDispatch()
  
  return (
    <>
        <h3> counter = {counter}</h3>
        <button onClick={()=>{dispatch(addNum())}}>+</button>
        <button onClick={()=>{dispatch(subNum())}}>-</button>

    </>

  )
}

export default ImplReducer