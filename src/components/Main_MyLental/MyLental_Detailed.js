import React from "react";
import './MyLental_Detailed.scss';
import image from './image/Frame 56.svg';

const MyLental_Detailed = () => {
    return(
        <div className="div">
            <div className="div_title"></div>
            <div className="list_teblet">
                <img className='tebletImg' src={image} alt="" />
                <div className="list_text">
                    <div className="smartpad">스마트 패드<span className="ing">대여 가능</span></div>
                    <div className="div_code">품목 코드:<span className="code">9115</span></div>
                    <div className="div_number">자산 번호:<span className="number">2017021402226</span></div>
                    <div className="list_money">구입 구분:<span className="money">교비(등록금)</span></div>
                    <div className="div_date2">구입 일자:<span className="date2">2017년 2월 14일</span></div>
                    <div className="div_padname">물품 규격:<span className="padname">LG G패드 3 8.0 Wi-Fi 32G</span></div>
                </div>
            </div>
            <div className="list_ddays">
                <div className="list_dday">D-14</div>
                <span className="list_span_dday">~11/30</span>
            </div>
            <div className="buttons">
                <button className="list_fixHelp">기자재 수리 요청</button>
                <button className="list_extension">대여 기간 연장</button>
            </div>
        </div>
    );
}

export default MyLental_Detailed;