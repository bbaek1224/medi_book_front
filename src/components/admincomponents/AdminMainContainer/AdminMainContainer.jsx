import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
function AdminMainContainer({ children }) {
    return (
        <div css={s.layout}>
            <div css={s.sideBar}>
                <div css={s.userBox}>
                    <div css={s.userImg}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
                    </div>
                    <div css={s.userButton}>
                        <button>마이프로필</button>
                        <button>로그아웃</button>
                    </div>
                </div>
                <div css={s.menuBox}>
                    
                </div>
            </div>
            <div css={s.container}>
                {children}
            </div>
        </div>
    );
}

export default AdminMainContainer;