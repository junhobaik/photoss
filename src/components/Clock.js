import React from 'react'

class Clock extends React.Component {
    render(){
        return (
            <div className={"clock"}>
                <div className={"clock-wrap"}>

                    <div className={"date"}>
                        <span>2017.12.31</span>
                    </div>

                    <div className={"time"}>
                        <span className={"hour"}>12</span>
                        <span className={"hm time-dot"}>:</span>
                        <span className={"min"}>34</span>
                        <span className={"mc time-dot"}>:</span>
                        <span className={"sec"}>56</span>
                    </div>

                    <div className={"time-mer"}>
                        <span>PM</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Clock;