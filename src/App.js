import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
      </div>
    );
  }
}

export default App;
