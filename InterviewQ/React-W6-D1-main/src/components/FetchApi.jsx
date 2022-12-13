import React, { useState } from 'react'

export const FetchApi = () => {
  const [data, setData] = useState('')

  const fetchApis = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(info => {
        console.log(info)
        setData(info)
    })

  }
  
  return (
    <>
        <button onClick={fetchApis}>Get Data</button>
       
        <h3>Fetched data:</h3>
        <p>
        
        title: {data.title}
        </p>
        <p>
        id: {data.id}
        </p>
        <p>
        User id: {data.userId}
        </p>
            
       
    </>
  )
}
