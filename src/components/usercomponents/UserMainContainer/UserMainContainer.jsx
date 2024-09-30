import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Signin from '../modal/Signin/Signin';
import Signup from '../modal/Signup/Signup';
import AdminSignin from '../modal/AdminSignin/AdminSignin';

function UserMainContainer({ children }) {
    const [ signupModalElement, setSignupModalElement ] = useState(<></>);
    const [ signinModalElement, setSigninModalElement ] = useState(<></>);
    const [ adminSigninModalElement, setAdminSigninModalElement ] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            setSignupModalElement(<Signup containerRef={containerRef} />)
            setSigninModalElement(<Signin containerRef={containerRef} />)
            setAdminSigninModalElement(<AdminSignin containerRef={containerRef} />)
        }
    }, [containerRef])

    return (
        <div css={s.layout} ref={containerRef}>
            {adminSigninModalElement}
            {signupModalElement}
            {signinModalElement}
            {children}
        </div>
    );
}

export default UserMainContainer;