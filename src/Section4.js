import React, { useEffect, useState } from 'react';
import './Section4.css';

const Section4 = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleSection3Complete = () => {
            setIsVisible(true);
        };

        window.addEventListener("section3Complete", handleSection3Complete);

        return () => {
            window.removeEventListener("section3Complete", handleSection3Complete);
        };
    }, []);

    return (
        <div className="Section4-Start">
            <div className={`Section4 ${isVisible ? 'fade-in-up_4' : ''}`}>
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
            <footer>
                <div className="Section4-Footer_Box">
                    <div className="Section4-Footer_1">
                        <span>개인정보</span>
                        <span>|</span>
                        <span>이용약관 동의</span>
                        <span>|</span>
                        <span>제휴문의</span>
                        <span>|</span>
                        <span>자주묻는질문</span>
                    </div>
                    <div className="Section4-Footer_2">
                        <span>팀장 : 이승훈</span>
                        <span>|</span>
                        <span>팀원 : 한여준</span>
                        <span>|</span>
                        <span>팀원 : 백승준</span>
                        <span>|</span>
                        <span>팀원 : 최영준</span>
                        <span>|</span>
                        <span>팀원 : 이주환</span>
                    </div>
                    <div className="Section4-Footer_3">
                        <span>Copyright © DEU Corp. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Section4;