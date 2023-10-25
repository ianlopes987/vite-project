import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    align-items: center;

    > #select{
        display: flex;
        flex-direction: column;
        font-size: 10px;
        color: black;

        > select {
            font-size: 10px;
        padding: 0 14px;
        border: 1px solid #E6E6F0;
        /*width: 120px;*/

        border-radius: 8px;
        background: #FAFAFC;
        height: 24px;
        line-height: 26px;
        color: #827f88;
        margin-bottom: 10px;
        }
    }

`;
