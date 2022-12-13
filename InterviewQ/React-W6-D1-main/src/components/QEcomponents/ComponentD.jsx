import React, {useContext} from 'react'
import {QEcontext} from '../../context/QEcontext'



const ComponentD = () => {

  const {stringB} = useContext(QEcontext) 
  
  return (
    <>
        <p>String B: {stringB} </p>
    </>
  )
}

export default ComponentD