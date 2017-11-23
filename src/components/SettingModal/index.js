import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import WallpaperSetting from './WallpaperSetting';
import EtcSetting from "./EtcSetting";

export default class SettingModal extends React.Component {
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

    render() {
        console.log("render SettingModal");

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
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                onClick={this.close}
                            >
                                Close
                            </Button>
                            <Button bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}