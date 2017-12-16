import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import Clock from './components/Clock';
import Setting from './components/SettingModal/';
import Wallpaper from "./components/Wallpaper";

class App extends Component {
    componentDidMount(){
        document.querySelector('.App').addEventListener("click", ()=>{
            document.querySelector('.Search .form-control').focus();
        });
    }
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


export default App;
