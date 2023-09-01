import styled from "styled-components";
import {Link} from "react-router-dom";

export const Conteiner = styled.header`

    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 0 80px;

`;

// estilizando a tag header

export const Profile = styled(Link)`

    display: flex;
    align-items: center;

    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    } // o sinal de maior que seguido da tag diz que o elemento esta dentro da div do comeco

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

`;

//estilizando a div que dentro dela tem a img do usuario, nome e botao sair

export const Logout = styled.button`

    border: none;
    background: none;

    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }

`

// nesse arquivo estou criando a estilização do componente header