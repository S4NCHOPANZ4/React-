import React, {useContext} from 'react'
import {QEcontext} from '../../context/QEcontext'

const ComponentC = () => {
  
  const {stringA} = useContext(QEcontext) 


  return (
    <>
        <p> String A: {stringA}</p>
    
    </>
  )
}

export default ComponentC