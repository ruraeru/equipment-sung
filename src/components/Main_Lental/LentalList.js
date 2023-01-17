import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Detailed from "./Detailed";
import Pagination from "./Pagination";
import EquipmentModal from "./detail/EquipmentModal";
import DetailEquipment from "./detail/DetailEquipment";
import './LentalList.scss';
import { createGlobalStyle } from "styled-components";
import axios from "axios";


function LentalList() {
  const [rentalList, setRentalList] = useState();
  const [equipmentData, setEquipmentData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const GlobalStyle = createGlobalStyle`
    button[id="list"] { color: #000; }
  `;


  //기자재 목록 불러오기
  const getRentalList = async () => {
    await axios.get("http://120.142.105.189:5080/tool/viewToolList/1", {
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3R1ZGVudCIsInVzZXJfbGljZW5zZSI6MywiZGVwYXJ0bWVudF9pZCI6MSwiZXhwIjoxNjczOTcxMDcyLCJpYXQiOjE2NzM5NDk0NzIsImlzcyI6ImFlbGltaSJ9.3xp6yjQva58zrEORtDZHo3dtQ1NVoiZuPqWBwScZPz0"
      }
    }).then((res) => {
      setRentalList(res.data.result);
      console.log("getRentalList", res.data.result);
    })
  }

  //기자재 상세 정보 불러오기
  const setDetailEquipmentData = async (tool_id) => {
    await axios.get("http://120.142.105.189:5080/tool/viewTool", {
      params: {
        tool_id: tool_id
      },
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3R1ZGVudCIsInVzZXJfbGljZW5zZSI6MywiZGVwYXJ0bWVudF9pZCI6MSwiZXhwIjoxNjczOTcxMDcyLCJpYXQiOjE2NzM5NDk0NzIsImlzcyI6ImFlbGltaSJ9.3xp6yjQva58zrEORtDZHo3dtQ1NVoiZuPqWBwScZPz0"
      }
    }).then(res => {
      if (res.data.suc) {
        setEquipmentData(res.data.tool);
      }
      else Promise.reject(new Error(res.data.error));
    }).catch(err => {
      console.log(err);
    });
    openModal();
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    getRentalList();
  }, []);

  const goToLogin = () => {
    navigate('/');
  };

  const goToMyLental = () => {
    navigate('/mylental');
  };

  const goToEditInfor = () => {
    navigate('/editInfor');
  };


  //기자재 검색하기
  const onSearchEquipment = async (e) => {
    setSearch(e.target.value);
    await axios.get(`http://120.142.105.189:5080/tool/searchTool/${e.target.value}/1`, {
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3R1ZGVudCIsInVzZXJfbGljZW5zZSI6MywiZGVwYXJ0bWVudF9pZCI6MSwiZXhwIjoxNjczOTcxMDcyLCJpYXQiOjE2NzM5NDk0NzIsImlzcyI6ImFlbGltaSJ9.3xp6yjQva58zrEORtDZHo3dtQ1NVoiZuPqWBwScZPz0"
      }
    })
      .then((res) => {
        setRentalList(res.data.tool);
      }).catch(() => {
        getRentalList();
      });
  }

  const [search, setSearch] = useState("");

  // const [posts, setPosts] = useState([]);
  const limit = 9;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // const [visible, setVisible] = useState(false);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      rentalList.forEach((el) => idArray.push(el.tool_id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  const [data, updateData] = useState([
    { id: 0, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 1, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 2, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 3, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 4, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 5, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 6, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 7, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 8, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 9, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 10, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 11, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 12, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 13, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 14, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 15, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 16, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 17, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 18, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 19, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 20, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 21, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 22, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 23, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 24, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 25, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 26, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 27, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 28, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 29, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 30, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 31, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 32, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 33, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 34, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 35, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 36, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 37, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 38, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 39, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false },
    { id: 40, title: '교육용', department: '소프트웨어콘텐츠과', name: '스마트패드', number: '2017021402226', state: '대여 가능', didIt: false }
  ])

  const data2 = [
    { id: 0, date: 'D-1', name: '스마트패드', code: '9115' },
    { id: 1, date: 'D-7', name: '스마트패드', code: '9115' },
    { id: 2, date: 'D-7', name: '스마트패드', code: '9115' },
    { id: 3, date: 'D-14', name: '스마트패드', code: '9115' },
    { id: 4, date: 'D-14', name: '스마트패드', code: '9115' },
  ];

  const data3 = [
    { id: 0, schoolNumber: '2021661096', studentName: '홍길동' }
  ];


  // const filterTitle = data.filter((p) => {
  //   return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
  // })

  const didItStyle = { color: "black" }
  const notYetStyle = { color: "black" }

  // 전달되는 id의 요소의 didIt을 바꿀 것이다!
  const toggleDidIt = (toggleId) => {
    const result = data.map((todo => {
      return todo.id === toggleId ? { ...todo, didIt: !todo.didIt } : todo
    }))
    updateData(result)
  }


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

              <GlobalStyle />
              <button id="list">대여 목록</button> <br />
              <button id="myList" onClick={goToMyLental}>내 대여 내역</button> <br />
              <button id="rename" onClick={goToEditInfor}>회원 정보 수정</button>
            </div>

            <div className="borrow">
              <span className="myListText">내 대여목록</span> <br />
              {/*map 함수 사용하실 때에는 두번째 인자 사용하셔서 key값 넣어주셔야합니다 */}
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
            <input id="search" type="text" value={search} placeholder='검색어를 입력하세요' onChange={onSearchEquipment} />
            <table className="LentalList_table">
              <thead>
                <tr>
                  <th className="t_check">
                    <input type='checkbox' name='select-all'
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                      checked={checkItems.length === rentalList?.length ? true : false} />
                  </th>
                  <th className="th_title">구분</th>
                  <th className="th_department">관리부서</th>
                  <th className="th_name">기자재명</th>
                  <th className="th_number">자산 번호</th>
                  <th className="th_state">기자재 상태</th>
                </tr>
              </thead>
              <div className="second-row"></div>
              <tbody>
                {/*기자재 목록 출력 */}
                {rentalList && rentalList.map((item, index) => (
                  <tr key={index} onClick={(e) => {
                    if (e.target.tagName !== "INPUT") {
                      setDetailEquipmentData(item.tool_id);
                    }
                  }}>
                    <td className="t_check">
                      <input type='checkbox' name={`select-${item.tool_id}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, item.tool_id)}
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={checkItems.includes(item.tool_id) ? true : false} />
                    </td>
                    <td className="main_title">{item.tool_use_division}</td>
                    <td className="main_department">{item.department.department_name}</td>
                    <td className="main_name">{item.tool_name}</td>
                    <td className="main_number">{item.tool_id}</td>
                    <td className="main_state">{item.tool_state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {equipmentData &&
              //기자재 상세 정보를 넘겨줘서 모달창으로 출력합니다
              <EquipmentModal open={modalOpen} close={closeModal} data={equipmentData}>
                <DetailEquipment data={equipmentData} />
              </EquipmentModal>
            }
            <footer>
              {/* <Pagination
                total={data.length}
                limit={limit}
                page={page}
                setPage={setPage}
              /> */}
              {/*이부분 다시 구현 하셔야합니다. */}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LentalList;