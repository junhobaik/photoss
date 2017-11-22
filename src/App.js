import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import Clock from './components/Clock';
import Setting from './components/SettingModal/';

class App extends Component {
    render() {
        console.log("render App");
        return (
            <div className="App">
                <div className={"App-wrap"}>
                    <div>
                        <Clock/>
                        <Search/>
                    </div>
                </div>
                <Setting/>
            </div>
        );
    }
}

export default App;
