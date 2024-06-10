import React, { useEffect, useRef, useState } from 'react';
import './Section2.css';

const Section2 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleSection1Complete = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    window.addEventListener("section1Complete", handleSection1Complete);

    return () => {
      window.removeEventListener("section1Complete", handleSection1Complete);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const handleAnimationEnd = () => {
        const event = new Event("section2Complete");
        window.dispatchEvent(event);
      };

      const sectionElement = sectionRef.current;
      sectionElement.addEventListener('animationend', handleAnimationEnd);

      return () => {
        sectionElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={`Section2 ${isVisible ? 'fade-in-up_2' : ''}`}>
      <div className="TopSection_2">
        <div className="First">
          <span>부모와 자녀에게 전하지 못했던 말을</span><br></br>
          <span><strong className="Function1">Q & A</strong>로 나누어 보세요</span>
        </div>
        <div className="ImgSection2_1">
          <img src={process.env.PUBLIC_URL + '/Q&A_1.jpg'} alt="App Logo" />
        </div>
      </div>
      <div className="ImgSection2_2">
        <img src={process.env.PUBLIC_URL + '/Q&A_2.jpg'} alt="App Logo" />
        <div className="BottomSection_2">
          <span>제가 가장 자랑스러웠던 순간은 언제였나요?</span>
          <br />
          <span>부모님이 저에게 가장 해주고 싶었던 조언이 있다면 무엇인가요?</span>
        </div>
      </div>
    </div>
  );
}

export default Section2;
