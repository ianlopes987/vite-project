import {Container} from "./styles"

export function Fieldset({title,children, ...rest}){
    return(
        <Container {...rest}>
            <legend>{title}</legend>
            {children}
        </Container>
    )
}