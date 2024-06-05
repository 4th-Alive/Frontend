import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="TopSection_2">
        <span>부모님에게 전하지 못했던 말</span>
        <span><strong>Q & A</strong>로 물어봐요</span>
        <div className="BottomSection_2">
          <span>• 제가 가장 자랑스러웠던 순간은 언제였나요?</span>
          <br />
          <span>• 부모님이 저에게 가장 해주고 싶었던 조언이 있다면 무엇인가요?</span>
        </div>
      </div>
      <div className="ImgSection_2">
        <img src={process.env.PUBLIC_URL + '/AppLogo.png'} alt="App Logo" />
      </div>
    </div>
  );
}

export default Section2;