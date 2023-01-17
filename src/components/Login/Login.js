import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validate";
import "./Login.scss";
import { createGlobalStyle } from "styled-components";



function Login() {


    const goToMain = () => {
        navigate('/LentalList');
    };

    const goToSignup = () => {
        navigate('Signup');
    };


    const { values, errors, handleChange, handleSubmit } = useForm(
        {
            initialValues: { id: "", password: "" },
            onSubmit: values => {
                console.Write(JSON.stringify(values, null, 2));
            },
        validate
        }
    );



    const [submitting, setButton] = useState(true);


    const GlobalStyle = createGlobalStyle`
      body {
        background-color: #404041;
      }
    `;



    function changeButton() {
        values.id.length > 0 && values.password.length > 0 ? setButton(false) : setButton(true);
    }



    let navigate = useNavigate();
    return (
        <div className="allPage">
            <form onSubmit={handleSubmit} noValidate>
                <GlobalStyle />
                <div className="container">
                    <p>로그인</p>
                    <label className="label_id">
                        <span className="id">아이디</span>
                        <input
                            type="id"
                            name="id"
                            placeholder='학번 혹은 아이디를 입력해주세요.'
                            autoComplete="off"
                            value={values.id}
                            onChange={handleChange}
                            onKeyUp={changeButton}
                            className={errors.id && "errorInput"}
                        />
                        {errors.id && <span className="errorMessage">{errors.id}</span>}
                    </label>

                    <br />

                    <label className="label_password">
                        <span className="password">비밀번호</span>
                        <input
                            type="password"
                            name="password"
                            placeholder='비밀번호를 입력해주세요.'
                            autoComplete="off"
                            value={values.password}
                            onChange={handleChange}
                            onKeyUp={changeButton}
                            className={errors.id && "errorInput"}
                        />
                        <br />
                        {errors.password && (
                            <span className="errorMessage">{errors.password}</span>
                        )}
                    </label>

                    <br />
                
                    <button 
                        type="submit" 
                        className="login" 
                        disabled={submitting}
                        // onClick={() => navigate("/mainPage")}
                        onClick={e => {
                            if (values.id && values.password === "1111") {
                                e.stopPropagation();
                                goToMain();
                            }
                        }}
                    >로그인</button>

                    <button type="submit" id="findId" onClick={e => {goToSignup();}}>아이디 찾기</button>
                    <button type="submit" id="changePw" onClick={e => {goToSignup();}}>비밀번호 변경</button>
                    <button type="submit" id="signup" onClick={e => {goToSignup();}}>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default Login;