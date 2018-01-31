import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MegaMenu from './component/mega-menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MegaMenu />
      </div>
    );
  }
}

export default App;
