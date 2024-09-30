import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import PageAniLayout from '../../../components/usercomponents/PageAniLayout/PageAniLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';

function SettingsPage(props) {
    const [ isShow, setShow ] = useState(true);

    return (
        <PageAniLayout isShow={isShow}> 
            <SubContainer>
                <div css={s.layout}>
                    <BackButton setShow={setShow} />
                    <div css={s.container}>
                        SettingsPage
                    </div>
                </div>
            </SubContainer>
        </PageAniLayout>
    );
}

export default SettingsPage;