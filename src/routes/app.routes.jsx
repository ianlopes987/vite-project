import {Routes, Route} from "react-router-dom";

import {New} from "../pages/new"
import {Home} from "../pages/home"
import {Details} from "../pages/Details"
import {Profile} from "../pages/profile"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}

// esse arquivo app.routes são as rotas para o usuario que esteja logado com uma conta

// esse arquivo define as rotas das nossas paginas, conforme a rota do usuario, ele chama a pagina correta conforme
// definido na pages