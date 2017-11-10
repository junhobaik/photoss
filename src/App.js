import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import Clock from './components/Clock';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={"App-wrap"}>
                    <Clock/>
                    <Search/>
                </div>
            </div>
        );
    }
}

export default App;
