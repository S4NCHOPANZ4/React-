import React, { Component } from 'react'
import UpdatedComp from './withCounter'
 

export class Hoc extends Component {

 
  render() {

    const {count , add , incrementCount} = this.props
    
    return (
      <div>

        <button onClick={incrementCount}>+{add} = {count} </button>
      </div>
    )
  }
}

export default UpdatedComp(Hoc)