import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminMainLayout({ children }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                {children}
            </div>
        </div>
    );
}

export default AdminMainLayout;