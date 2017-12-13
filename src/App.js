import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import Clock from './components/Clock';
import Setting from './components/SettingModal/';
import Wallpaper from "./components/Wallpaper";

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className={"App-wrap"}>
                        <div>
                            <Clock/>
                            <Search/>
                        </div>
                    </div>
                    <Setting/>
                </div>
                <Wallpaper/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return{
    };
};

App = connect(mapStateToProps)(App);

export default App;
