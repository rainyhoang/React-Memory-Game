import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*Import Components*/

import dogs from './dogs.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import DogCard from './components/DogCard'

class App extends Component {
/*Define the State*/
  state ={
      message: "Play Now",
      topScore: 0,
      curScore: 0,
      dogs: dogs,
      unselectedDogs: dogs
  }
  
  componentDidMount(){}
/*Shuffle array of Picture after play*/
  shuffleArray = array => {
    for(let i = array.length -1; i > 0; i++){
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  selectDog = array => {
    const findDog = this.state.unselectedDogs.find(item => item.breed === breed)
  /*fail to find new dog*/
    if (findDog === undefined) {
      this.setState({
        message:"Sorry! you already chose this breed",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore: this.state.topScore,
        curScore: 0,
        dog: dogs,
        unselectedDogs: dogs
      });
    }else{
        const newDogs = this.state.unselectedDogs.filter(item => item.breed !== breed);

        this.setState({
          message: "BRAVO"
          curScore: this.state.curScore + 1,
          dogs: dogs
          unselectedDogs: dogs
        })
    }

  }


/************Render Components to HTML****************/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
