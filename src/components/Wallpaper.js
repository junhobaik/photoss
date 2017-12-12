import React, { Component } from 'react';

export default class Wallpaper extends Component{
    constructor(props){
        super(props);

        this.state = {
            cnt: 1,
            size: {
                width: 1600,
                height: 900
            },
            method: "tag",
            name: "random"
        }
    }

    componentDidMount(){
        const lighter = (counter, setTime, p)=>{
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
        };


        const setWallpaper = (ele, size, cnt)=>{
            if(this.state.method === "tag"){
                const img = new Image();
                img.onload = function() {
                    ele.style.backgroundImage = `url(${this.src})`;
                    if(cnt !== 0) lighter(20, 50, cnt);
                };

                if(this.state.name === "random"){
                    img.src = `https://source.unsplash.com/random/${size.width}x${size.height}/`;
                } else {
                    img.src = `https://source.unsplash.com/${size.width}x${size.height}/?${this.state.name}`;
                }


            } else if(this.state.method === "collection"){
                ele.style.backgroundImage = `url(https://source.unsplash.com/${this.state.name}/${size.width}x${size.height})`
            } else if(this.state.method === "user"){

            } else {
                console.log("error setWallpaper");
            }
        };


        const wallpaperChangeTime = 10000;

        const firstSet = (size)=>{
            document.querySelector('.first-cover').style.opacity = 1;
            document.querySelector('.front').style.opacity = 1;
            document.querySelector('.middle').style.opacity = 0;
            document.querySelector('.back').style.opacity = 0;

            setWallpaper(document.querySelector('.front'), {width: size.width - 10, height: size.height - 20}, 0);
            setWallpaper(document.querySelector('.middle'), {width: size.width - 20, height: size.height - 10}, 0);

            setTimeout(()=>{
                this.test = setInterval(()=>{
                    document.querySelector('.first-cover').style.opacity = document.querySelector('.first-cover').style.opacity - 0.05;
                    if(document.querySelector('.first-cover').style.opacity <= 0) clearInterval(this.test);
                }, 50)
            },wallpaperChangeTime);
        };
        firstSet(this.state.size);


        setTimeout(()=>{
            this.changer = setInterval(()=>{
                clearInterval(this.test);

                let i = this.state.cnt;
                const size = this.state.size;

                if(i === 101) i = 1;


                if(i%3 === 1){
                    setWallpaper(document.querySelector('.back'), size, i);
                }else if(i%3 === 2){
                    setWallpaper(document.querySelector('.front'), size, i);
                }else {
                    setWallpaper(document.querySelector('.middle'), size, i);
                }

                this.setState({
                    cnt: i + 1,
                    size : {
                        width: size.width,
                        height: size.height + 1
                    }
                })
            }, wallpaperChangeTime);
        },wallpaperChangeTime);


        const toDataURL = url => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob)
            }));

        toDataURL(`https://source.unsplash.com/random/${this.state.size.width}x${this.state.size.height}`)
            .then(dataUrl => {
                return dataUrl;
            })
            .then((dataUrl)=>{
                localStorage.setItem("firstWallpaper", dataUrl);
            })


    }

    componentWillUnmount(){
        clearInterval(this.changer);
    }



    render(){
        return(
            <div className={"Wallpaper"}>

                <div className="first-cover" style={{
                    backgroundImage : `url(${localStorage.getItem("firstWallpaper")})`
                }}>
                </div>

                <div className="front"/>
                <div className="middle"/>
                <div className="back"/>
            </div>
        );
    }
}