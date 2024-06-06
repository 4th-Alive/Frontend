import './Section1.css';
import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, speed, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            onComplete();

            const event = new Event("animationComplete");
            window.dispatchEvent(event);
        }
    }, [index, text, speed, onComplete]);

    return <div className="typingTitle">{displayedText}</div>;
};

const TypingTitle = () => {
    const lines = [
        '부모와 자녀 간의 원활한 대화는',
        '중요한 역할을 합니다',
    ];

    const [currentLine, setCurrentLine] = useState(0);

    const handleComplete = () => {
        if (currentLine < lines.length - 1) {
            setCurrentLine((prev) => prev + 1);
        }
    };

    return (
        <h1>
            {lines.slice(0, currentLine + 1).map((line, index) => (
                <TypingAnimation
                    key={index}
                    text={line}
                    speed={60}
                    onComplete={handleComplete}
                />
            ))}
        </h1>
    );
};


const Section1 = () => {
    return (
        <div id="Section1">
            <div className="SectionBox1">
                <span id="Qmark_1">“</span>
                <div className="TitleBox">
                    <TypingTitle></TypingTitle>
                </div>
                <span id="Qmark_2">”</span>
            </div>
            <div className="SectionBox1_2">
                <h3 className="MiniTitle">우리 가족은 서로에게 이해와 지지를 줄 수 있는 곳이야. 너의 이야기를 듣고 싶어</h3>
            </div>

            <div className="AppDownload">
                <img src={process.env.PUBLIC_URL + '/appstore.svg'} className="MainLogo"></img>
                <img src={process.env.PUBLIC_URL + '/googleplay.svg'} className="MainLogo"></img>
            </div>
        </div>
    );
}

export default Section1;