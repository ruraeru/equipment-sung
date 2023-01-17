import React from "react";
import './Detailed.scss';
import image from './image/Frame 56.svg';

const Detailed = () => {
    return(
        <div className="div">
            <div className="div_title"></div>
            <div className="teblet">
                <img className='tebletImg' src={image} alt="" />
                <div className="text">
                    <div className="smartpad">스마트 패드<span className="ing">대여 가능</span></div>
                    <div className="div_code">품목 코드:<span className="code">9115</span></div>
                    <div className="div_number">자산 번호:<span className="number">2017021402226</span></div>
                    <div className="div_date1">변동 일자:<span className="date1">2022 / 12 / 05</span></div>
                    <div className="div_money">구입 구분:<span className="money">교비(등록금)</span></div>
                    <div className="div_date2">구입 일자:<span className="date2">2017년 2월 14일</span></div>
                    <div className="div_padname">물품 규격:<span className="padname">LG G패드 3 8.0 Wi-Fi 32G</span></div>
                </div>
            </div>
            <button className="fixHelp">기자재 수리 요청</button>
        </div>
    );
}

export default Detailed;