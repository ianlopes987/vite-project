import {Container,Form, Background} from "./styles";
import {Input} from "../../components/input";
import {Link} from "react-router-dom"; // com a tag link podemos navegar entre paginas com links
import {FiMail,FiLock,FiUser} from "react-icons/fi";
import {Button} from "../../components/button";

export function SignUp(){
    return(
        <Container>
            <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Cadastrar">
                </Button>
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
            
        </Container>
    )
}

// nessa pagina apliquei um link para redirecionar o usuario para uma rota atraves do TO