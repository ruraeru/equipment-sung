import React from "react";
import { useNavigate } from "react-router-dom";
import './EditInfor.scss';
import image from './image/Frame 56.svg';
import { createGlobalStyle } from "styled-components";


function EditInfor() {

  const GlobalStyle = createGlobalStyle`
  button[id="rename"] { color: #000; }
`;

  const goToLogin = () => {
      navigate('/');
    };
  
  const goToMyLental = () => {
      navigate('/mylental');
  };
  
  const goToEditInfor = () => {
      navigate('/editInfor');
  };

  const goToMain_Lental = () => {
      navigate('/lentalList');
  }

  const data2 = [
      {id: 0, date: 'D-1', name: '스마트패드', code: '9115'},
      {id: 1, date: 'D-7', name: '스마트패드', code: '9115'},
      {id: 2, date: 'D-7', name: '스마트패드', code: '9115'},
      {id: 3, date: 'D-14', name: '스마트패드', code: '9115'},
      {id: 4, date: 'D-14', name: '스마트패드', code: '9115'},
  ];
  
  const data3 = [
      {id: 0, schoolNumber: '2021661096', studentName: '홍길동'}
  ];

  const data4 = [
      {id: 0, name: '스마트패드', state: '대여중', code: '9115', number: '2017021402226', division: '교비(등록금)', date: '2017년 2월 14일', standard: 'LG G패드 38.0 Wi-Fi 32G'}
      // {id: 1, name: '스마트패드', state: '반납', code: '9115', number: '2017021402226', division: '교비(등록금)', date: '2017년 2월 14일', standard: 'LG G패드 38.0 Wi-Fi 32G'}
  ];

  const infor = [
    {id: 0, studentname: '홍길동', department: '소프트웨어콘텐츠', phoneNumber: '010-1234-5678', schoolNumber: '2021661096', email: 'TestUser@test.com'}
  ];


  let navigate = useNavigate();
  return (
    <div className="web">
      <div className="web_flex">
        <div className="navigation">
          <div className="logo">로고</div>
          <div className="miniInformation">
            {data3.map((data3) => (
              <div className="mini_student">
                {data3.schoolNumber} &nbsp;&nbsp;&nbsp;학번 &nbsp;
                {data3.studentName} &nbsp;&nbsp;&nbsp;님
              </div>
            ))}
            <button id="logout" onClick={goToLogin}>로그아웃</button>
            <button id="n_list">대여 목록 보기</button>
            <button id="n_myList" onClick={goToMyLental}>대여 내역</button>
          </div>
        </div>

        <div className="all">
          <div className="all_infor">
            <div className="information">
              <div className="student">
                {data3.map((data3) => (
                  <div className="studentText">
                    {data3.schoolNumber} 학번 <br /><br />
                    {data3.studentName} 님 <br /><br />
                    학부생 사용자
                  </div>
                ))}
              </div>

              <GlobalStyle /><button id="list">대여 목록</button> <br />
              <button id="myList" onClick={goToMyLental}>내 대여 내역</button> <br />
              <button id="rename" onClick={goToEditInfor}>회원 정보 수정</button>
            </div>

            <div className="borrow">
              <span className="myListText">내 대여목록</span> <br />
              {data2.map((data2) => (
                <div className="d-day">
                  {data2.date} <br />
                  {data2.name} <br />
                  <span>품목코드 :</span> {data2.code}
                </div>
              ))}
            </div>
          </div>

          <div className="InforModify_web">  
            <div className="lenderInfor">
              <div className="lenderInfor_in">
                <div className="title_edit">
                  <span>대여자 정보</span>
                  <button>정보 수정</button>
                </div>
                {infor.map((infor) => (
                  <div className="student_infor">
                    <div>대여자&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infor.studentname}<br /></div>
                    <div>학과&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infor.department}<br /></div>
                    <div>전화번호&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{infor.phoneNumber}<br /><br /></div>
                    <div>학번&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infor.schoolNumber}<br /></div>
                    <div>이메일&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infor.email}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lately_item">
              <div className="item_title">
                <span>최근 대여 품목</span>
                <button>더보기</button>
              </div>
              <div className="data4_map">
                {data4.map((data4) => (
                  <div className="data4">
                    <img className='tebletImg' src={image} alt="" />
                    <div className="data4_information">
                      <div className="d4_infor_name">{data4.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data4.state}</span></div> 
                      <div className="d4_infor_code">품목 코드 : {data4.code}</div>
                      <div className="d4_infor_number">자산 번호 : {data4.number}</div>
                      <div className="d4_infor_division">구입 구분 : {data4.division}</div>
                      <div className="d4_infor_date">구입 일자 : {data4.date}</div>
                      <div className="d4_infor_standard">물품 규격 : {data4.standard}</div>
                    </div>
                  </div>
                ))}

                {data4.map((data4) => (
                  <div className="data4">
                    <img className='tebletImg' src={image} alt="" />
                    <div className="data4_information">
                      <div className="d4_infor_name">{data4.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data4.state}</span></div> 
                      <div className="d4_infor_code">품목 코드 : {data4.code}</div>
                      <div className="d4_infor_number">자산 번호 : {data4.number}</div>
                      <div className="d4_infor_division">구입 구분 : {data4.division}</div>
                      <div className="d4_infor_date">구입 일자 : {data4.date}</div>
                      <div className="d4_infor_standard">물품 규격 : {data4.standard}</div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="lately_management">
              <div className="item_title">
                <span>최근 건의 내역</span>
                <button>더보기</button>
              </div>
              <div className="data4_map">
                {data4.map((data4) => (
                  <div className="data4">
                    <img className='tebletImg' src={image} alt="" />
                    <div className="data4_information">
                      <div className="d4_infor_name">{data4.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data4.state}</span></div> 
                      <div className="d4_infor_code">품목 코드 : {data4.code}</div>
                      <div className="d4_infor_number">자산 번호 : {data4.number}</div>
                      <div className="d4_infor_division">구입 구분 : {data4.division}</div>
                      <div className="d4_infor_date">구입 일자 : {data4.date}</div>
                      <div className="d4_infor_standard">물품 규격 : {data4.standard}</div>
                    </div>
                  </div>
                ))}

                {data4.map((data4) => (
                  <div className="data4">
                    <img className='tebletImg' src={image} alt="" />
                    <div className="data4_information">
                      <div className="d4_infor_name">{data4.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{data4.state}</span></div> 
                      <div className="d4_infor_code">품목 코드 : {data4.code}</div>
                      <div className="d4_infor_number">자산 번호 : {data4.number}</div>
                      <div className="d4_infor_division">구입 구분 : {data4.division}</div>
                      <div className="d4_infor_date">구입 일자 : {data4.date}</div>
                      <div className="d4_infor_standard">물품 규격 : {data4.standard}</div>
                    </div>
                  </div>
                ))}

                </div>
            </div>
      </div>
          
        </div>
      </div>
    </div>
  );
}

export default EditInfor;