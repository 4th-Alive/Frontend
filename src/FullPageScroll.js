import React, { useEffect, useState } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const FullPageScroll = () => {
  const SectionStyle = {
    // height: '100vh',
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }


  // #3
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
        <span id="Qmark_1">"</span>
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <TypingAnimation
            key={index}
            text={line}
            speed={60}
            onComplete={handleComplete}
          />
        ))}
        <span id="Qmark_2">"</span>
      </h1>
    );
  };

  return (
    <Fullpage>

      <FullpageNavigation />

      <FullPageSections>

        <FullpageSection style={SectionStyle}>
          <div id="Section_fix">
            <div className="SectionBox_1">
              <TypingTitle></TypingTitle>
            </div>
            <div className="SectionBox_2">
              <h3 className="MiniTitle">소통을 합시다</h3>
            </div>
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1>Section 2</h1>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1>Section 3</h1>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1>Section 4</h1>
        </FullpageSection>

      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;