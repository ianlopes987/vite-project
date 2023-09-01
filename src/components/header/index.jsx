import {RiShutDownLine} from "react-icons/ri"
import {Conteiner,Profile, Logout} from "./styles"

export function Header(){
    return(
        <Conteiner>
            <Profile to = "/profile">
                <img src="https://github.com/ianlopes987.png" alt="foto do usuario" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Ian Lopes</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Conteiner>
    )
}