import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="TopSection_2">
        <div className="First">
        <span>부모와 자녀에게 전하지 못했던 말을</span><br></br>
        <span><strong>Q & A</strong>로 나누어 보세요</span>
        </div>
        <div className="BottomSection_2">
          <span>• 제가 가장 자랑스러웠던 순간은 언제였나요?</span>
          <br/>
          <span>• 부모님이 저에게 가장 해주고 싶었던 조언이 있다면 무엇인가요?</span>
        </div>
        <div className="ImgSection2_1 fade-in-up_2">
        <img src={process.env.PUBLIC_URL + '/AppLogo.png'} alt="App Logo" />
        </div>
      </div>
      <div className="ImgSection2_2 fade-in-up_2">
        <img src={process.env.PUBLIC_URL + '/AppLogo.png'} alt="App Logo" />
      </div>
    </div>
  );
}

export default Section2;