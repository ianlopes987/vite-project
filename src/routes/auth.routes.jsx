import {Routes, Route} from "react-router-dom";

import {SignIn} from "../pages/sigin"
import {SignUp} from "../pages/signup"


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}

// esse arquivo auth.routes são as rotas para o usuario que nao esteja logado, para se logar ou criar uma conta

// esse arquivo define as rotas das nossas paginas, conforme a rota do usuario, ele chama a pagina correta conforme
// definido na pages