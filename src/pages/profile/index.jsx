import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import {Link} from "react-router-dom";
import {Container,Form, Avatar} from "./styles";
import {Input} from "../../components/input"
import {Button} from "../../components/button"

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft></FiArrowLeft>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/ianlopes987.png" alt="foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="Email" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova atual" type="password" icon={FiLock} />

                <Button title="Salvar" />

            </Form>
        </Container>
    );
}