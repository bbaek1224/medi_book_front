import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function StartPage(props) {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //         navigate("/login");
    //     }, 5000);
    // }, [])

    return (
        <div css={s.layout}>
            <div css={s.titleContainer}>
                <span>친절한 의사들이 함께합니다</span>
            </div>
            <div css={s.imgBox}>
                <img src="/docter2.png" alt=''  />
            </div>
            <div css={s.downContainer}>
                <h2>MEDIBOOK</h2>
            </div>
        </div>
    );
}

export default StartPage;