import React from 'react';
import './sealWater.css';

const SealWater = () => {
    return (
        <div className="box-canvas">

            <div style={{padding: 20, fontSize: 30}} id={'header-home-page'}>
                <h1> Hệ thống làm bài thi trắc nghiệm online  </h1>
            </div>

            <div className="seal">
                <div className="mask">
                    <div className="whisker left"/>
                    <div className="whisker right"/>
                </div>
                <div className="brow left"/>
                <div className="brow right"/>
                <div className="eye left"/>
                <div className="eye right"/>
                <div className="mouth"/>
                <div className="nose">
                    <div className="nostrils"/>
                </div>
            </div>
        </div>
    )
}

export default SealWater;
