import React from 'react'
import Hoc from './Hoc2'
import Hoc20 from './Hoc20'
import Hoc200 from './Hoc200'

const CreateHOC = () => {
  return (
    <div>
        <Hoc add={2}/>
        <Hoc20 add={20}/>
        <Hoc200 add={200}/>

    </div>
  )
}

export default CreateHOC