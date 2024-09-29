import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserModalLayout from '../UserModalLayout/UserModalLayout';
import { useRecoilState } from 'recoil';
import { signinModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

function Signin({ containerRef }) {
    const [ signinOpen, setSigninOpen ] = useRecoilState(signinModalAtom);
    const [ ani, setAni ] = useState("userModalOpen")

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setSigninOpen(false);
        }, 500)
         
    }

    return (
        <UserModalLayout containerRef={containerRef} isOpen={signinOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>

            </div>
        </UserModalLayout>
    );
}

export default Signin;