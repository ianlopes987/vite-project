import { Container, Brand, Menu, Search, Content, NewNote} from "./styles";
import {Header} from "../../components/header";
import {ButtonText} from "../../components/buttonText"
import {Input} from "../../components/input"
import {Note} from "../../components/notes"
import {Section} from "../../components/section"
import {FiPlus,FiSearch} from "react-icons/fi"

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}></Input>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data = {{
                        title: "React",
                        tags: [
                            {id:"1", name: "react"},
                            {id:"2", name: "rocketseat"}
                        ]
                    }} 
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus></FiPlus>
                Criar nota
            </NewNote>
        </Container>

    )
}