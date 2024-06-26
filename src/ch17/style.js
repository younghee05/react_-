import { css } from "@emotion/react";
 // emotion 하는 방법 

 export const Container = (width) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: ${width}px;
    height: 500px;

`;
 export const Container2 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 400px;
    height: 400px;

`;
 export const Container3 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;

`;
 export const Container4 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;

`;
 export const Button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;

`;