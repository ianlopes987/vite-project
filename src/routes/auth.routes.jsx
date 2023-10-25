import {Routes, Route} from "react-router-dom";

import {SignIn} from "../pages/sigin"


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    )
}

// esse arquivo auth.routes são as rotas para o usuario que nao esteja logado, para se logar ou criar uma conta

// esse arquivo define as rotas das nossas paginas, conforme a rota do usuario, ele chama a pagina correta conforme
// definido na pages