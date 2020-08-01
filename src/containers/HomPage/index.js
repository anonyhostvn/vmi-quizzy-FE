import React from "react";
import SealWater from "../../components/SealWater";
import Particles from 'react-particles-js';
import {HomePageWrapper} from "./homePage.style";
import SpecialButton from "../../components/SpecialButton";
import {routerDict} from "../../routers/app.router.config";


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
            <div className={'main-content nav-button'} >
                <SpecialButton text={'Thi bằng lái xe A1'} hoverText={'Bắt đầu làm'} to={routerDict.a1test}/>
            </div>
        </HomePageWrapper>
    )
}

export default HomePage;