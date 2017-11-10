import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import Clock from './components/Clock';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Clock/>
                <Search/>
            </div>
        );
    }
}

export default App;
