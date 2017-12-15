import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import WallpaperSetting from './WallpaperSetting';
import EtcSetting from "./EtcSetting";

import { connect } from 'react-redux';
import {saveSetting} from "../../actions/index";

class SettingModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal : false
        };
    }

    close = ()=>{
        return this.setState({
            showModal: false
        });
    };

    open = ()=>{
        return this.setState({
            showModal: true
        });
    };

    saveSetting = (e)=>{
        let method, name, openMethod, size;

        const lis = document.querySelectorAll("#wallpaper-methods>.nav-tabs>li");
        for(let i in lis){
            if(lis[i].className){
                method = lis[i].querySelector('a').innerText.toLowerCase();
                name = document.querySelectorAll("#wallpaper-methods>.tab-content>div")[i].querySelector('.name').value;
                break;
            }
        }
        openMethod = parseInt(document.querySelector('#set-open .active>input').value, 10);
        size = parseInt(document.querySelector('#set-size .active>input').value, 10);

        if((method === "collection" || method === "user" || method === "tag") && name === ""){
            alert("Error! Check the blank.");
        }else{
            this.props.saveSetting({method, name, openMethod, size});
            this.close();
        }


    };

    render() {
        return(
            <div className={"SettingModal"}>​
                <div className={"SettingModal-wrap"}>
                    <Button
                        bsStyle="link"
                        bsSize="large"
                        onClick={this.open}
                    >
                        <span className={"glyphicon glyphicon-cog"}></span>
                    </Button>
                    ​
                    <Modal className="SettingModal-modal" show={this.state.showModal} onHide={this.close}>

                        <Modal.Header>
                            <Modal.Title>Setting</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <WallpaperSetting/>
                            <EtcSetting/>
                            <div>
                                <hr/>
                                All images were provided in "<a target="_blank" href="https://unsplash.com/" rel="noopener noreferrer">Unsplash.com</a>"
                                <br/>
                                After saving the settings, apply approximately 30 seconds.
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                onClick={this.close}
                            >
                                Close
                            </Button>

                            <Button
                                bsStyle="primary"
                                onClick={this.saveSetting}
                            >
                                Save changes
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        saveSetting: (setting) => dispatch(saveSetting(setting))
    }
};

SettingModal = connect(mapStateToProps, mapDispatchToProps)(SettingModal);

export default SettingModal;