import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;

`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fafafc;
    margin-top: 20px;
    border-radius: 8px;
    min-height: 300px;
    padding: 50px;
    margin: 0px 16px;

    > fieldset{
        border: none;
    }

    > legend {
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        border-bottom: 1px solid #e6e6f0;
        padding-bottom: 10px;
        margin-bottom: 24px;
        color: black;
    }



`;