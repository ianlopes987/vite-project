import {Header} from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import {Link} from "react-router-dom";

import {Container,Form} from "./styles";

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to = "/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="observacoes"/>
                    <Section title="Links Uteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Novo Tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}