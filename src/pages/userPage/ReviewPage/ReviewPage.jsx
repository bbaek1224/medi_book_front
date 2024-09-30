import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import PageAniLayout from '../../../components/usercomponents/PageAniLayout/PageAniLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function ReviewPage(props) {
    const [ isShow, setShow ] = useState(true);

    return (
        <PageAniLayout isShow={isShow}> 
            <UserSubContainer>
                <div css={s.layout}>
                    <BackButton setShow={setShow} />
                    <div css={s.container}>
                        ReviewPage
                    </div>
                </div>
            </UserSubContainer>
        </PageAniLayout>
    );
}

export default ReviewPage;