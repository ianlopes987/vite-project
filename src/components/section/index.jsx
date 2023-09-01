import {Container} from "./styles";

export function Section({title,children}){
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    );
}

// observe que nesse componente estamos usando o parametro children, que na realidade pode ser um elemento html
// no arquivo details na page nos inserimos uma tag ul > li como children, entao o nosso componente esta recebendo
// no children elementos html