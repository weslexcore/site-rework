import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav'
import MainPage from '../MainPage/MainPage'
import SpotifyContainer from '../SpotifyContainer/SpotifyContainer'
import '../../assets/styles/global.css'
import '../../assets/styles/animate.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNav />
      <MainPage />
      <SpotifyContainer />
      </div>
    );
  }
}

export default App;
