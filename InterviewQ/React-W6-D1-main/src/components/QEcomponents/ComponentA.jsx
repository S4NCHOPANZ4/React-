import React from 'react'
import { useState } from 'react'
import ComponentB from './ComponentB'
import {QEcontext} from '../../context/QEcontext'

const ComponentA = () => {
  const [stringA , setStringA] = useState('')
  const [stringB , setStringB] = useState('')
    
  const ChangeStringA = e =>{
    let target = e.target
    setStringA(target.value)    
   }

   const ChangeStringB = e =>{
    let target = e.target
    setStringB(target.value)
   }
    
  return (
    <>
        <input type="text" onChange={ChangeStringA} placeholder="Set String A"/>
        <br/>
        <input type="text" onChange={ChangeStringB}  placeholder="Set String B"/>
        

        <QEcontext.Provider value={{stringA, stringB}}>

            <ComponentB/>  

        </QEcontext.Provider>
    
    </>
    )
}

export default ComponentA