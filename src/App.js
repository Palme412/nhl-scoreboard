import React, { Component } from 'react'
import './App.css';
import CardsDataThree from './Cards';
import CardsDataTwo from './cardsData';

//Components


class App extends Component {
  render() {
    return (
      <div className='App'>
        <CardsDataTwo />
        <CardsDataThree />
      </div>
    )
  }
};

export default App;
