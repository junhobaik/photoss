import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip, Tabs, Tab } from 'react-bootstrap';


export default class WallpaperSetting extends Component {

    render(){
        const tooltip = (text)=>{
            return(<Tooltip id="tooltip">{text}</Tooltip>);
        };

        const tagList = [
            "Dark", "Travel", "City", "Office", "Nature", "Modern", "Wedding", "Random"
        ];

        const tagBtnList = tagList.map((v)=>{
            return(
                <Button
                    key={v}
                    style={{
                        backgroundImage: "url(https://source.unsplash.com/200x100/?" + v + ")"
                    }}
                    onClick={()=>{document.querySelector('#tagName').value = v;}}
                >
                    {v}
                </Button>
            );
        });

        return(
            <div className={"wallpaper-set"}>
                <h3>Wallpaper</h3>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

                    {/* Tab 1, 태그 */}
                    <Tab eventKey={1} title="Tag">
                        <div>
                            Tag Name : <input id={"tagName"} type="text"/>
                        </div>
                        <div className={"tag-btn-list"}>
                            {tagBtnList}
                        </div>
                    </Tab>


                    {/* Tab 2, 콜렉션 */}
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


                    {/* Tab 3, 사용자 */}
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