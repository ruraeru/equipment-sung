import axios from "axios";
import { useEffect } from "react";
import "./DetailEquipment.scss";

export default function DetailEquipment({ data }) {
    console.log("data", data);
    //객체 비구조화 할당
    const { tool_name, tool_code, tool_id, tool_purchase_division, tool_purchase_date, tool_standard, tool_state }
        = data.result;
    useEffect(() => {
        //기자재 이미지 불러오는 함수
        loadEquipmentImg();
    }, []);

    const loadEquipmentImg = async () => {
        const img = document.querySelector("img");
        if (data.image) {
            img.src = `http://120.142.105.189:5080/tool/${data.image.img_url}`;
        }
    }
    return (
        <div id="detail-equipment" style={{
            height: "218px"
        }}>
            <div>
                <img src="https://www.lenovo.com/medias/lenovo-tablet-lenovo-tab-p12-pro-subseries-hero.png?context=bWFzdGVyfHJvb3R8MjM1NTEwfGltYWdlL3BuZ3xoOTgvaGQ3LzEyNjgwMzcxOTI5MTE4LnBuZ3wzZjU1YzNmYmMzZDgxOTQ5NjBkZjU2ZThhNmUxZGMzY2E2ZjM3ZjM1OGMyZDA4YzhjNTBhNjUxZDRhMDlhZjgx" alt="태블릿" />
            </div>
            <div id="information">
                <p className="equipment-name">
                    <span>{tool_name}</span> &nbsp; {tool_state}
                </p>
                <p className="equipment-code">
                    품목 코드 : &nbsp; {tool_code} <br />
                    자산 번호 : &nbsp; {tool_id}
                </p>
                <p className="equipment-detail">
                    구입구분 : &nbsp; {tool_purchase_division} <br />
                    구입 일자 : &nbsp; {tool_purchase_date?.split("-")[0]}년&nbsp;
                    {tool_purchase_date.split("-")[1]}월&nbsp;
                    {tool_purchase_date.split("-")[2]?.slice(0, 2)}일 <br />
                    물품 규격 : &nbsp; {tool_standard}
                </p>
            </div>
            <div id="information" style={{
                paddingLeft: "100px",
            }}>
                {data.rental &&
                    <div>
                        <p className="equipment-name">
                            <span>대여 정보</span>
                        </p>
                        <div className="equipment-code" style={{
                            width: "100%",
                        }}>
                            <p style={{
                                marginBottom: 0
                            }}>
                                대여자: &nbsp; {data.rental.user.user_name}(학부생) <br />
                            </p>
                            <p style={{
                                textAlign: "right",
                                marginTop: 0
                            }}>
                                대여 기간: &nbsp;
                                {data.rental?.rental_date?.split("-")[0]} / {data.rental?.rental_date?.split("-")[1]} / {data.rental?.rental_date?.split("-")[2].slice(0, 2)} <br />
                                ~ {data.rental?.rental_due_date?.split("-")[0]} / {data.rental?.rental_due_date?.split("-")[1]} / {data.rental?.rental_due_date?.split("-")[2].slice(0, 2)}
                                <br />
                                (남은 기간 : {data.rental?.rental_due_date?.split("-")[2].slice(0, 2) - new Date().getDate()} 일)
                            </p>
                        </div>
                    </div>
                }
            </div>
            {/* <td>
                <button>기자재 수리 요청</button>
            </td> */}
        </div>
    );
}