import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class EtcSetting extends React.Component {
    render(){
        return(
            <div className={"EtcSetting"}>
                <h3>etc.</h3>
                <div className={"content"}>
                    <div className={"search-set"}>
                        <h4>Open Method (Search result page)</h4>
                        <ButtonToolbar id={"set-open"}>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton value={1}>
                                    New Tab
                                </ToggleButton>
                                <ToggleButton value={2}>
                                    Current Tab
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}

