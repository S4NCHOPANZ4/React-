import React from 'react';

const UpdatedComp = (OG) =>{
    
    class NewComp extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0,
               add: this.props.add
            }
          } 
        
          incrementCount = () =>{
            this.setState(prev =>{
                return {count: prev.count + prev.add}
            })
          }
        
        render(){
            return <OG 
            add={this.state.add} 
            count={this.state.count}
            incrementCount={this.incrementCount}/>
        }
    }
    return NewComp
}
export default UpdatedComp