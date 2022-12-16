import React, { Fragment } from "react";
import styled from "styled-components";
import { Fireworks } from 'fireworks-js'
import { Howl, Howler } from 'howler';

import music1 from './musica.mp3'

const MainCss = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .body-main {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-family: sans-serif;
        background-color: #FFBF00;

        /* Book */
        .book {
            position: relative;
            width: 350px;
            height: 500px;
            transition: transform 0.5s;

            .paper {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                perspective: 1500px;
        
            }

            /* Paper stack order */
            #p1 {
                z-index: 3;
            }
        
            #p2 {
                z-index: 2;
            }
        
            #p3 {
                z-index: 1;
            }
        
            .front,
            .back {
                background-color: white;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transform-origin: left;
                transition: transform 0.5s;
            }
        
            .front {
                z-index: 1;
                backface-visibility: hidden;
                border-left: 3px solid powderblue;
            }
        
            .back {
                z-index: 0;
            }
        
            .front-content,
            .back-content {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        
            .back-content {
                transform: rotateY(180deg)
            }
        
            /* Paper flip effect */
            .flipped .front,
            .flipped .back {
                transform: rotateY(-180deg);
            }
        }

        

        /* Controller Buttons */
        button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            margin: 10px;
            transition: transform 0.5s;
        }

        button:focus {
            outline: none;
        }

        button:hover i {
            color: #636363;
        }

        i {
            font-size: 50px;
            color: gray;
        }
    }

    .firework {
        position: absolute;
        z-index: 10;
    }
    .explosion {
        position: absolute;
        left: -2px;
        bottom: 0;
        width: 4px;
        height: 80px;
        transform-origin: 50% 100%;
        /* background-color: rgba(0,0,0,.2); */
        overflow: hidden;
    }
    .explosion:nth-child(1) {
        transform: rotate(0deg) translateY(-15px);
    }
    .explosion:nth-child(2) {
        transform: rotate(30deg) translateY(-15px);
    }
    .explosion:nth-child(3) {
        transform: rotate(60deg) translateY(-15px);
    }
    .explosion:nth-child(4) {
        transform: rotate(90deg) translateY(-15px);
    }
    .explosion:nth-child(5) {
        transform: rotate(120deg) translateY(-15px);
    }
    .explosion:nth-child(6) {
        transform: rotate(150deg) translateY(-15px);
    }
    .explosion:nth-child(7) {
        transform: rotate(180deg) translateY(-15px);
    }
    .explosion:nth-child(8) {
        transform: rotate(210deg) translateY(-15px);
    }
    .explosion:nth-child(9) {
        transform: rotate(240deg) translateY(-15px);
    }
    .explosion:nth-child(10) {
        transform: rotate(270deg) translateY(-15px);
    }
    .explosion:nth-child(11) {
        transform: rotate(300deg) translateY(-15px);
    }
    .explosion:nth-child(12) {
        transform: rotate(330deg) translateY(-15px);
    }
    
    .explosion::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 40px;
        background-color: #E6E6FA;
    }
    @keyframes explosion {
        0% {
            top: 100%;
        }
        33%, 100% {
            top: -50%;
        }
    }
    
    #firework1 {
        left: 50%;
        top: 50%;
        transform: scale(1);
    }
    #firework1 .explosion::before {
        animation: explosion 2s ease-in-out infinite;
    }
    
    #firework2 {
        left: 40%;
        top: 45%;
        transform: scale(1);
    }
    #firework2 .explosion::before {
        animation: explosion 2s .6s ease-in-out infinite;
    }
    
    #firework3 {
        left: 60%;
        top: 65%;
        transform: scale(1);
    }
    #firework3 .explosion::before {
        animation: explosion 2s .4s ease-in-out infinite;
    }
    #firework4 {
        left: 90%;
        top: 12%;
        transform: scale(1);
    }
    #firework4 .explosion::before {
        animation: explosion 2s .4s ease-in-out infinite;
    }
    #firework5 {
        left: 12%;
        top: 12%;
        transform: scale(1);
    }
    #firework5 .explosion::before {
        animation: explosion 2s .1s ease-in-out infinite;
    }
    #firework6 {
        left: 11%;
        top: 86%;
        transform: scale(1);
    }
    #firework6 .explosion::before {
        animation: explosion 2s .4s ease-in-out infinite;
    }
    #firework7 {
        left: 90%;
        top: 86%;
        transform: scale(1);
    }
    #firework7 .explosion::before {
        animation: explosion 2s .6s ease-in-out infinite;
    }
    #firework8 {
        left: 78%;
        top: 74%;
        transform: scale(1);
    }
    #firework8 .explosion::before {
        animation: explosion 2s .1s ease-in-out infinite;
    }
    #firework9 {
        left: 28%;
        top: 75%;
        transform: scale(1);
    }
    #firework9 .explosion::before {
        animation: explosion 2s .3s ease-in-out infinite;
    }
    #firework10 {
        left: 20%;
        top: 20%;
        transform: scale(1);
    }
    #firework10 .explosion::before {
        animation: explosion 2s .9s ease-in-out infinite;
    }
}
`;

const Main = () => {

    const callMysound = (src) => {
        const sound = new Howl({
            src,
            html5: true,
            volume: 0.5
        });
        sound.play();
    }
    callMysound(music1);
    return (
        <MainCss className="main-css">
            {/* <button onClick={() => callMysound}>clica</button> */}
            <div className="body-main">
                {/* <!-- Previous Button --> */}
                <button id="prev-btn">
                    <i className="fas fa-arrow-circle-left"></i>
                </button>
                {/* <!-- Book --> */}
                <div id="book" className="book">
                    {/* <!-- Paper 1 --> */}
                    <div id="p1" className="paper">
                        <div className="front">
                            <div id="f1" className="front-content">
                                <h1>Front 1</h1>
                            </div>
                        </div>
                        <div className="back">
                            <div id="b1" className="back-content">
                                <h1>Back 1</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Paper 2 --> */}
                    <div id="p2" className="paper">
                        <div className="front">
                            <div id="f2" className="front-content">
                                <h1>Front 2</h1>
                            </div>
                        </div>
                        <div className="back">
                            <div id="b2" className="back-content">
                                <h1>Back 2</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Paper 3 --> */}
                    <div id="p3" className="paper">
                        <div className="front">
                            <div id="f3" className="front-content">
                                <h1>Front 3</h1>
                            </div>
                        </div>
                        <div className="back">
                            <div id="b3" className="back-content">
                                <h1>Back 3</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <button id="next-btn">
                    <i className="fas fa-arrow-circle-right"></i>
                </button>
            </div>
            <div className="firework" id="firework1">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework2">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework3">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework4">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework5">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework6">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework7">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework8">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework9">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
            <div className="firework" id="firework10">
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
                <div className="explosion"></div>
            </div>
        </MainCss>
    );
};


export default Main;