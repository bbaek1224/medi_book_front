import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    width: 100%;
    height: 100%;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;

    & div {
        cursor: default;
    }
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    border: 2px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    flex-grow: 1;
`;

export const detailBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: center;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;

    & svg {
        font-size: 35px;
        cursor: pointer;
    }
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding:5px;
    width: 100%;
    flex-grow: 1;
`;

export const footer = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    width: 100%;
    height: 200px;

    & button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 49%;
        height: 49%;
        font-size: 25px;
        cursor: pointer;
    }

    & button:nth-of-type(1) {
        margin-bottom: 10px;
    }

    & button:nth-of-type(2) {
        margin-bottom: 10px;
    }
`;