import React, { useEffect, useState } from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <div className="Section4">
            <div className="Section4-TopText">
                <span>가족의 일상을 더욱 특별하게 지금 바로 시작해보세요!</span>
            </div>
            <div className="Section4-SubText">
                <span>전국 부모와 자녀들이 선택한 소통 앱</span>
            </div>
            <div className="Section4-Img">
                <div className="Section4-App_Store">
                    <img src={process.env.PUBLIC_URL + '/AppStore.png'} alt="App Logo" />
                </div>
                <div className="Section4-Google_Play">
                    <img src={process.env.PUBLIC_URL + '/GooglePlay.png'} alt="App Logo" />
                </div>
            </div>
        </div>
    );
}

export default Section4;