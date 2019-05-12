import React, { Component } from 'react';

import QuoteCard from './component/QuoteCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="app-title">
          <h1>Machine Quote</h1>
          </div>
          <QuoteCard/>
        </header>
      </div>
    );
  }
}

export default App;
