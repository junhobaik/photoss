import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firstImage } from '../images';

class Wallpaper extends Component{
    constructor(props){
        super(props);

        this.state = {
            cnt: 1
        }
    }

    componentDidMount(){

        const toDataURL = url => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob)
            }));

        const setUrlQuery = (size, cnt = this.state.cnt)=>{
            size = {
                width: size.width,
                height: size.height + cnt,
            };

            switch(this.props.method){
                case "tag":
                    let src;
                    if(this.props.name === "random"){
                        src = `https://source.unsplash.com/random/${size.width}x${size.height}/`;
                    } else {
                        src = `https://source.unsplash.com/${size.width}x${size.height}/?${this.props.name}`;
                    }
                    return src;
                case "collection":
                    return `https://source.unsplash.com/collection/${this.props.name}/${size.width}x${size.height}`;
                case "user":
                    return `https://source.unsplash.com/user/${this.props.name}/${size.width}x${size.height}`;
                default:
                    console.log("setUrlQuery() error");
                    return;
            }
        };

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
            const src = setUrlQuery(size);
            //console.log(src);
            const img = new Image();
            img.onload = function() {
                ele.style.backgroundImage = `url(${this.src})`;
                if(cnt !== 0) lighter(20, 50, cnt);
            };

            img.src = src;
        };




        if(localStorage.getItem("rwFirstWallpaper") === null){
            document.querySelector('.first-cover').style.backgroundImage = `url(${firstImage})`;
            toDataURL(setUrlQuery(this.props.size))
                .then(dataUrl => {
                    localStorage.setItem("rwFirstWallpaper", dataUrl);
                });
            setTimeout(()=>{
                alert("Welcome to the first use. Use the buttons at the bottom of the right hand corner to set up.")
            }, 3000);
        }




        const wallpaperChangeTime = 15000;

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
        firstSet(this.props.size);



        setTimeout(()=>{
            this.changer = setInterval(()=>{
                clearInterval(this.test);

                let i = this.state.cnt;
                const size = this.props.size;

                if(i === 31) i = 1;

                if(i%3 === 1){
                    setWallpaper(document.querySelector('.back'), size, i);
                    document.querySelector('.first-cover').style.opacity = 0;
                    toDataURL(setUrlQuery(size))
                        .then(dataUrl => {
                            localStorage.setItem("rwFirstWallpaper", dataUrl);
                        });
                }else if(i%3 === 2){
                    setWallpaper(document.querySelector('.front'), size, i);
                }else {
                    setWallpaper(document.querySelector('.middle'), size, i);
                }

                this.setState({
                    cnt: i + 1,
                })
            }, wallpaperChangeTime);
        },wallpaperChangeTime);
    }

    componentWillUnmount(){
        clearInterval(this.changer);
    }



    render(){
        return(
            <div className={"Wallpaper"}>

                <div className="first-cover" style={{
                    backgroundImage : `url(${localStorage.getItem("rwFirstWallpaper")})`
                }}>
                </div>

                <div className="front"/>
                <div className="middle"/>
                <div className="back"/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        size: state.size,
        method: state.method,
        name: state.name
    };
};

Wallpaper = connect(mapStateToProps)(Wallpaper);

export default Wallpaper;