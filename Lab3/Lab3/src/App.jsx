import { Component } from 'react';
import './App.css'
import ChallengeOne from './components/ChallengeOne.jsx'
class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>React Lab 3</h1>
          <ChallengeOne />
      </div>
    );
  }
}

export default App;