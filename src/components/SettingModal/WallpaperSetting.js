import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip, Tabs, Tab } from 'react-bootstrap';

import { connect } from 'react-redux';

class WallpaperSetting extends Component {

    componentDidMount(){
        switch(this.props.method){
            case "tag":
                document.querySelector('#tagName').value = this.props.name;
                return;
            case "collection":
                document.querySelector('#collectionName').value = this.props.name;
                return;
            case "user":
                document.querySelector('#userName').value = this.props.name;
                return;
            default:
                return;
        }
    }

    render(){
        const tooltip = (text)=>{
            return(<Tooltip id="tooltip">{text}</Tooltip>);
        };

        const tagList = [
            "Dark", "Travel", "City", "Office", "Nature", "Modern", "Wedding", "Girl", "Man", "Love", "Christmas", "Random"
        ];

        const test = (e)=>{
            document.querySelector('#tagName').value = e.target.innerText;
        };
        const tagBtnList = tagList.map((v)=>{
            return(
                <Button
                    key={v}
                    style={{
                        backgroundImage: "url(https://source.unsplash.com/200x100/?" + v + ")"
                    }}
                    onClick={test}
                >
                    {v}
                </Button>
            );
        });

        let tabActiveKey;
        const method = this.props.method;
        if(method === "user") tabActiveKey = 3;
        else if(method === "collection") tabActiveKey = 2;
        else tabActiveKey = 1;

        return(
            <div className={"wallpaper-set"}>
                <h3>Wallpaper</h3>
                <Tabs defaultActiveKey={tabActiveKey} id="wallpaper-methods">

                    {/* Tab 1, 태그 */}
                    <Tab eventKey={1} title="Tag">
                        <div>
                            Tag Name :
                            <input id={"tagName"} className={"name"} type="text"/>
                        </div>
                        <div className={"tag-btn-list"}>
                            {tagBtnList}
                        </div>
                    </Tab>


                    {/* Tab 2, 콜렉션 */}
                    <Tab eventKey={2} title="Collection">
                        <div>
                            <span>Collection ID : </span>
                            <input type="text" id={"collectionName"} className={"name"}/>
                            <OverlayTrigger
                                placement="right"
                                overlay={tooltip('ID=1349014, "https://unsplash.com/collections/1349014/wallpaper"')}>
                                <span className={"glyphicon glyphicon-question-sign"}/>
                            </OverlayTrigger>
                        </div>
                        <div>
                            <span>Collection Search : </span>
                            <a target="_blank" href={"https://unsplash.com/collections"}>
                                <Button
                                    bsSize={"small"}
                                >
                                    Find
                                </Button>
                            </a>
                        </div>
                        <div>
                            <span>
                                If the size of the images in the collection is small or the number of images is small, the display may not work well.
                            </span>
                        </div>
                    </Tab>


                    {/* Tab 3, 사용자 */}
                    <Tab eventKey={3} title="User">
                        <div>
                            <span>User Name : </span>
                            <input type="text" id={"userName"} className={"name"}/>
                            <OverlayTrigger
                                placement="right"
                                overlay={tooltip('UserName=dev_b, "https://unsplash.com/@dev_b/collections"')}>
                                <span className={"glyphicon glyphicon-question-sign"}/>
                            </OverlayTrigger>
                        </div>
                        <div>
                            <span>
                                If the size of user's images is small or the number of images is small, the display may not work well.
                            </span>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        method: state.method,
        name: state.name
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

WallpaperSetting = connect(mapStateToProps, mapDispatchToProps)(WallpaperSetting);

export default WallpaperSetting;