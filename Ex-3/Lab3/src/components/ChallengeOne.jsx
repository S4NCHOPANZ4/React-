import React, { Component } from 'react';
//import images
import LookLeft from '../assets/look-left.jpeg'
import LookRight from '../assets/look-right.jpeg'


class ChallengeOne extends Component {
  //declare the state here
  state = {
    rol: false
  };

  //click left/right button handler goes here
  handleDir = (dir) =>{

    if(dir === 'right'){
      this.setState({rol: false});
    }
    else{
      this.setState({rol: true});

    }
     
  }


  render() {
    return (
      <>z
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.rol ? LookLeft : LookRight}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleDir("left")}>⭠</button>
        <button className="btn" onClick={() => this.handleDir("right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;