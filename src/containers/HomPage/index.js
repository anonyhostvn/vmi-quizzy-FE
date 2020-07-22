import React from "react";
import SealWater from "../../components/SealWater";
import Particles from 'react-particles-js';
import {HomePageWrapper} from "./homePage.style";


const HomePage = () => {

    const particleParams = {
        particles: {
            number: {
                value: 150
            },
            size: {
                value: 5
            },
            opacity: {
                value: 0.5
            },
            lineLinked: {
                "enable": false,
                "distance": 30,
                "opacity": 0.4
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                }
            }
        },

    }

    return (
        <HomePageWrapper>
            <Particles params={particleParams}/>
            <SealWater/>
        </HomePageWrapper>
    )
}

export default HomePage;