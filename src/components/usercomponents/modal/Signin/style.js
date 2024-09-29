import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;

    display: flex;
`;

export const cancelButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    padding: 5px 10px;
    width: 100%;

    & svg {
        font-size: 35px;
    }
`;