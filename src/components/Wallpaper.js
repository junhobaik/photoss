import React, { Component } from 'react';

export default class Wallpaper extends Component{
    constructor(props){
        super(props);

        this.state = {
            size: {
                width: 1600,
                height: 900
            }
        }
    }


    componentDidUpdate(){
        console.log("componentDidUpdate Wallpaper");
    }

    componentDidMount(){
        console.log("componentDidMount Wallpaper");

        let i = 1;

        const firstSet = (size)=>{
            console.log("firstSet");
            document.querySelector('.front').style.opacity = 1;
            document.querySelector('.middle').style.opacity = 0;
            document.querySelector('.back').style.opacity = 0;
            document.querySelector('.front').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height}/?night`;
            document.querySelector('.middle').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height - 1}/?night`;
            document.querySelector('.back').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height - 2}/?night`;
        };

        firstSet(this.state.size);



        function lighter(counter, setTime, p){
            if(counter > 0){
                setTimeout(function(){
                    counter--;
                    if(p%3 === 1){
                        document.querySelector('.front').style.opacity = parseFloat(document.querySelector('.front').style.opacity) - 0.05;
                        document.querySelector('.middle').style.opacity = parseFloat(document.querySelector('.middle').style.opacity) + 0.05;
                    }else if(p%3 === 2) {
                        document.querySelector('.middle').style.opacity = parseFloat(document.querySelector('.middle').style.opacity) - 0.05;
                        document.querySelector('.back').style.opacity = parseFloat(document.querySelector('.back').style.opacity) + 0.05;
                    }else {
                        document.querySelector('.back').style.opacity = parseFloat(document.querySelector('.back').style.opacity) - 0.05;
                        document.querySelector('.front').style.opacity = parseFloat(document.querySelector('.front').style.opacity) + 0.05;
                    }
                    lighter(counter, setTime, p);
                }, setTime);
            }
        }

        this.changer = setInterval(()=>{
            if(i === 101) i = 1;
            lighter(20, 75, i++);

            const size = this.state.size;

            if(i%3 === 1){
                document.querySelector('.back').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height}/?night`
            }else if(i%3 === 2){
                document.querySelector('.front').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height}/?night`
            }else {
                document.querySelector('.middle').style.backgroundImage = `url(https://source.unsplash.com/${size.width}x${size.height}/?night`
            }

            this.setState({
                size : {
                    width: size.width,
                    height: size.height + 1
                }
            })

        }, 3000);


    }

    componentWillUnmount(){
        clearInterval(this.changer);
    }



    render(){
        console.log("render Wallpaper");


        return(
            <div className={"Wallpaper"}>
                <div
                    className="front"
                />
                <div
                    className="middle"
                />
                <div
                    className="back"
                />
            </div>
        );
    }
}