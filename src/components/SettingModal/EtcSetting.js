import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import { connect } from 'react-redux';

class EtcSetting extends React.Component {
    render(){
        return(
            <div className={"EtcSetting"}>
                <h3>etc.</h3>
                <div className={"content"}>
                    <div className={"search-set"}>
                        <h4>Open Method (Search result page)</h4>
                        <ButtonToolbar id={"set-open"}>
                            <ToggleButtonGroup justified type="radio" name="options" defaultValue={this.props.openMethod}>
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
let mapStateToProps = (state) => {
    return{
        openMethod: state.openMethod
    }
};


EtcSetting = connect(mapStateToProps)(EtcSetting);

export default EtcSetting;