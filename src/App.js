import React, { Component } from 'react'
import './App.css';
import DisplayCard from './Cards';
import Blog from './Blog';

//Components


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Blog />
      </div>
    )
  }
};

export default App;
