import React, { Component } from 'react'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        console.log("render Clock");
        const makeDate = ()=>{
            const date = this.state.date;
            let dates = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                date: date.getDate(),
                day: date.toString().substr(0,3),
                hour: date.getHours(),
                min: date.getMinutes(),
                sec: date.getSeconds(),
                mer: "AM"
            };
            if(dates.hour === 0){
                dates.hour = 12;
            } else if(dates.hour > 12){
                dates.mer = "PM";
                dates.hour = dates.hour - 12;
            }
            const makeTwoChar = (v) => v.toString().length < 2 ? `0${v}` : v;
            dates.date = makeTwoChar(dates.date);
            dates.month = makeTwoChar(dates.month);
            dates.hour = makeTwoChar(dates.hour);
            dates.min = makeTwoChar(dates.min);
            dates.sec = makeTwoChar(dates.sec);

            return dates;
        };

        const dates = makeDate();


        return (
            <div className={"Clock"}>
                <div className={"Clock-wrap"}>

                    <div className={"date"}>
                        <span>{`${dates.year}.${dates.month}.${dates.date} ${dates.day}`}</span>
                    </div>

                    <div className={"time-wrap"}>
                        <div className={"time"}>
                            <span className={"hour"}>{dates.hour}</span>
                            <span className={"hm time-dot"}>:</span>
                            <span className={"min"}>{dates.min}</span>
                            <span className={"mc time-dot"}>:</span>
                            <span className={"sec"}>{dates.sec}</span>
                        </div>

                        <div className={"time-mer"}>
                            <span>{dates.mer}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Clock;