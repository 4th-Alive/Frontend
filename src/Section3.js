import React, { useEffect, useRef, useState } from 'react';
import './Section3.css';

const Section3 = () => {
    return (
        <div className="Section3 fade-in-up_3">
            <div className="Section3-Top_SubTitle">
                <div className="Section3-Text">
                    <div className="Section3-MainText">
                        <span>부모와 자녀가 함께 성장하는 <strong>공간</strong></span><br></br>
                    </div>
                    <div className="Section3-SubText">
                        <span>일기장으로 가족의 일상을 공유하고, 더 가까워지는 시간을 가져보세요</span>
                    </div>
                </div>
            </div>
            <div className="Section3-Img">
                <img src={process.env.PUBLIC_URL + '/Diary_2.png'} alt="App Logo" />
            </div>
        </div>
    );
}

export default Section3;