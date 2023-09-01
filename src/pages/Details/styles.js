import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`;

export const Links = styled.ul`

    list-style: none;

    > li{
        margin-top: 12px;
    }

    a{
        color: ${({theme}) => theme.COLORS.WHITE};
    }


`;

export const Content = styled.div`

    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: end;
    }

    > h1{
        font: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p{
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

`



/* esse arquivo é o arquivo de estilização do componente details, pois é uma boa
estratégia separar um arquivo css para cada componente, é mais inteligente. porem não usamos
um arquivo css para fazer a estilização, nós escrevemos o css dentro de um arquivo js via styled
componentes, uma biblioteca instalada. isso por que podemos usar a estratégia de pré processadores
para melhorar até mesmo o tamanho dos arquivos.  */