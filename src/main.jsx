import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; // necessario importar o theme provider
import {Routes} from './routes';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import {AuthProvider} from "./hooks/auth";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

/*  esse arquivo main.jsx é o arquivo fonte principal que vai ser chamado pela index.html
esse arquivo contem o que vai ser renderizado no html, inclusive ele faz alteração no html
através da dom, e é através de importações que ele tem o conteúdo das telas que serão
renderizadas na página. */

/* para usar o tema, tem*os que usar o componente dentro de uma theme provider no qual esta 
mostrado no exemplo abaixo. e tambem dentro dela tem a global styles que aplica os estilos
globais em todos os componentes */


