import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiHome2Line } from "react-icons/ri";
import LoadingPage from '../../../components/usercomponents/Loading/LoadingPage';
import { useSetRecoilState } from 'recoil';
import { adminSigninModalAtom, signinModalAtom, signupModalAtom } from '../../../atoms/modalAtoms';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import MainContainer from '../../../components/usercomponents/MainContainer/MainContainer';
import AdminDashBoard from '../../adminPage/AdminDashBoard/AdminDashBoard';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';

function HomePage(props) {
    const nav = useNavigate();

    const setSigninModalState = useSetRecoilState(signinModalAtom);
    const setSignupModalState = useSetRecoilState(signupModalAtom);
    const setAdminSigninModalState = useSetRecoilState(adminSigninModalAtom);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    const handleSigninModalOnClick = () => {
        // setSigninModalState(true)
        nav("/dashboard/*", { replace: true })
    }

    const handleSignupModalOnClick = () => {
        setSignupModalState(true)
    }

    const handleAdminSigninModalOnClick = () => {
        // setAdminSigninModalState(true)
        nav("/admin/*", { replace: true })
    }

    return (
        <MainLayout>
        <MainContainer>
            {
                isLoading ? <LoadingPage /> :
                    <div css={s.layout}>
                        <div css={s.container}>
                            <div css={s.titleBox}>
                                <h1>MEDIBOOK</h1>
                            </div>
                            <div css={s.contentBox}>
                                <p>MEDIBOOK</p>
                                <p>예약 사이트 어플</p>
                            </div>
                            <div css={s.buttonBox}>
                                <RiHome2Line />
                                <button>메인화면 바로가기</button>
                            </div>
                            <div css={s.imgBox}>
                                <img src="/cloud.png" alt="" />
                            </div>
                        </div>
                        <div css={s.loginContainer}>
                            <div css={s.loginTitle}>
                                <p>로그인 & 회원가입</p>
                            </div>
                            <div css={s.loginButtonBox}>
                                <button onClick={handleSigninModalOnClick}>로그인</button>
                                <button onClick={handleSignupModalOnClick}>회원가입</button>
                                <button onClick={handleAdminSigninModalOnClick}>관리자 로그인</button>
                            </div>
                        </div>
                    </div>
            }
            <Routes>
                <Route path='/dashboard/*' element={<DashBoard />}/>
            </Routes>
        </MainContainer>
        </MainLayout>
    );
}

export default HomePage;