import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip, Tabs, Tab } from 'react-bootstrap';


export default class WallpaperSetting extends Component {

    render(){
        const tooltip = (text)=>{
            return(<Tooltip id="tooltip">{text}</Tooltip>);
        };

        const tagList = [
            "Dark", "Travel", "City", "Office", "Nature", "Modern", "Wedding"
        ];

        const testStyle = {
            backgroundImage: "url(https://source.unsplash.com/200x100/?dark)",
        };

        const tagBtnList = tagList.map((v)=>{
            return(
                <Button
                    style={{
                        backgroundImage: "url(https://source.unsplash.com/200x100/?" + v + ")"
                    }}
                >
                    {v}
                </Button>
            );
        });

        return(
            <div className={"wallpaper-set"}>
                <h3>Wallpaper</h3>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Tag">
                        <div>
                            Tag Name : <input type="text"/>
                        </div>
                        <div className={"tag-btn-list"}>
                            {tagBtnList}
                            <Button
                                style={{
                                    backgroundImage: "url(https://source.unsplash.com/random/200x100)"
                                }}
                            >
                                Random
                            </Button>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Collection">
                        <div>
                            <span>Collection ID : </span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span>Collection Search : </span>
                            <OverlayTrigger placement="bottom" overlay={tooltip("툴팁1")}>
                                <Button
                                    bsSize={"small"}
                                >
                                    Find
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="User">

                        <div>
                            <span>User Name : </span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span>User Search : </span>
                            <OverlayTrigger placement="bottom" overlay={tooltip("툴팁2")}>
                                <Button
                                    bsSize={"small"}
                                >
                                    Find
                                </Button>
                            </OverlayTrigger>
                        </div>

                    </Tab>
                </Tabs>
            </div>
        );
    }
}