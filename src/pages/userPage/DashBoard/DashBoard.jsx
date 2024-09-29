import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import PageAniLayout from '../../../components/usercomponents/PageAniLayout/PageAniLayout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReservationPage from '../ReservationPage/ReservationPage';
import { IoIosAdd } from "react-icons/io";
import ReservationListPage from '../ReservationListPage/ReservationListPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import SettingsPage from '../SettingsPage/SettingsPage';

function DashBoard(props) {
    const nav = useNavigate();

    const [isShow, setShow] = useState(true);

    const handleReservationOnClick = () => {
        nav("/dashboard/reservation")
    }

    const handleReservationListOnClick = () => {
        nav("/dashboard/reservationlist")
    }

    const handleReviewOnClick = () => {
        nav("/dashboard/review")
    }

    const handleSettingsOnClick = () => {
        nav("/dashboard/settings")
    }

    return (
        <PageAniLayout isShow={isShow}>
            <UserSubContainer>
                <div css={s.layout}>
                    <div css={s.header}>
                        <div>
                            사용자 이름
                        </div>
                        <div>
                            오늘 날짜
                        </div>
                    </div>
                    <div css={s.body}>
                        <div css={s.detailBox}>
                            <IoIosAdd />
                        </div>
                        <div css={s.reservationBox}>
                            오늘 예약 중에 가장 가까운 것 출력 상단의 +버튼을 통해 예약 리스트로 이동 가능
                        </div>
                    </div>
                    <div css={s.footer}>
                        <button onClick={handleReservationOnClick}>예약 하기</button>
                        <button onClick={handleReservationListOnClick}>예약 조회</button>
                        <button onClick={handleReviewOnClick}>리뷰 쓰기 및 조회</button>
                        <button onClick={handleSettingsOnClick}>설정</button>
                    </div>
                </div>
                <Routes>
                    <Route path='/reservation' element={<ReservationPage />} />
                    <Route path='/reservationlist' element={<ReservationListPage />} />
                    <Route path='/review' element={<ReviewPage />} />
                    <Route path='/settings' element={<SettingsPage />} />
                </Routes>
            </UserSubContainer>
        </PageAniLayout>
    );
}

export default DashBoard;