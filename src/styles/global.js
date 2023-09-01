import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smothing: antialiased;
    }

    a{
        text-decoration: none;
    }

    button , a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover , a:hover {
        filter: brightness(0.9);
    }

    body, input , button , textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

`;

/* esse é o arquivo de estilização global, pois além de cada componente ter o seu proprio
arquivo de estilizacao, nos tambem usamos um arquivo global para todos os componentes que
no caso contem a estilizacao do que é comum a todos os componentes  */