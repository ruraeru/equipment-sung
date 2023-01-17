import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './MyLental.scss';
import ListDetailed from "./MyLental_Detailed";
import { createGlobalStyle } from "styled-components";


function LentalList() {

  const GlobalStyle = createGlobalStyle`
    button[id="myList"] { color: #000; }
    `;

    const SubGlobalStyle = createGlobalStyle`
    button[id="N_myList"] { color: #000; } 
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
    };

    const goToTendious = () => {
        navigate('/tendious');
    };

    const goToManagement = () => {
        navigate('/management');
    };

    const [search, setSearch] = useState("");
    const onChange = (e) => {
      setSearch(e.target.value)
    }

    const [data, updateData] = useState([
        {id: 0, date: '11/16', title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', code: '9115' , state: '대여중', didIt: false},
        {id: 1, date: '11/16', title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', code: '9115' , state: '대여중', didIt: false},
        {id: 2, date: '11/16', title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', code: '9115' , state: '대여중', didIt: false},
        {id: 3, date: '11/16', title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', code: '9115' , state: '대여중', didIt: false},
        {id: 4, date: '11/16', title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', code: '9115' , state: '반납', didIt: false}
    ])

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

    // 전달되는 id의 요소의 didIt을 바꿀 것이다!
    const toggleDidIt = (toggleId) =>{
      const result = data.map((todo=>{
          return todo.id === toggleId ? {...todo, didIt: !todo.didIt} : todo
      }))
      updateData(result)
    }

    const didItStyle = {color:"black"}
    const notYetStyle = {color:"black"}


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

              <button id="list" onClick={goToMain_Lental}>대여 목록</button> <br />
              <GlobalStyle /><button id="myList">내 대여 내역</button> <br />
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

          <div className="t_web">
              <input id="search" type="text" value={search} placeholder='검색어를 입력하세요' onChange={onChange} />
              <div className="N_button">
                <SubGlobalStyle /><button id='N_myList'>내 대여내역</button>
                <button id='N_myTendinous' onClick={goToTendious}>내 건의내역</button>
                <button id='N_management' onClick={goToManagement}>대여 관리</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                      <th className="list_date">날짜</th>
                      <th className="list_title">구분</th>
                      <th className="list_department">관리부서</th>
                      <th className="list_name">기자재명</th>
                      <th className="list_code">품목 코드</th>
                      <th className="list_state">기자재 상태</th>
                  </tr>
                </thead>
                <div className="second-row"></div>
                <tbody>
                  {data.map((data, key) => (
                    <tr key={key} onClick = {()=> toggleDidIt(data.id)}style={ data.didIt ? didItStyle:notYetStyle }>
                      <td className="td_date">{data.date}</td>
                      <td className="td_title">{data.title}</td>
                      <td className="td_department">{data.department}</td>
                      <td className="td_name">{data.name}</td>
                      <td className="td_code">{data.code}</td>
                      <td className="td_state">{data.state}</td>
                      <div>{data.didIt && <ListDetailed />}</div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LentalList;