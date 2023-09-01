import {Container} from './styles'

export function Button({title,loading = false,...rest}){

    // nesse arquivo estou criando um componente botao para ser usado
    // como parametro, recebemos uma propriedade inclusa no main.js no componente
    // para que ele seja flexivel, ou seja o conteudo dele altere conforme queremos

    return(
        <Container 
        type = "button"
        disable={loading}
        {...rest}
        >
            {loading ? "Carregando...":title}
        </Container>
    );

}