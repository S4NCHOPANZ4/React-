import React, { useState } from 'react'
import { render } from 'react-dom';

export const DeleteItems = () => {

  const [items, setItem] = useState([])

  const deleteItem = (e, id) => {
    let target = e.target

    let newArr = items.filter(item => item.id !== id)
    
    setItem(newArr)

  }

  const submit = e => {
    e.preventDefault();
    
    let target = e.target
    let item = {
        text: target.text.value,
        id: new Date().getTime()
    }
    setItem([item, ...items])

}
  return (
    <>
    <form onSubmit={submit}>
        <input type="text" id="text" placeholder="Add Item"/>
        <button type='submit'>Add Item</button>
    </form>
     <ul>
        {items.map(item =>{
            return(
                <li key={item.id} onClick={()=> deleteItem(event ,item.id)} id={item.id}>{item.text}</li>
            )
        })}
     </ul>
    </>
  )
}
