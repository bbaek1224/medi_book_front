import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
`;

export const sideBar = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 5px;
    width: 250px;
`;

export const userBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    height: 200px;
`;

export const userImg = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100%;
    overflow: hidden;

    & > img {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        cursor: pointer;
    }
`;

export const userButton = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;

    & button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 100px;
        height: 30px;
        font-weight: 600;
    }
`;

export const menuBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    flex-grow: 1;
`;

export const container = css`
    box-sizing: border-box;
    flex-grow: 1;
`;