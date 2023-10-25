import {Container} from "./styles";

export function Input({title,...rest}){

    return(

        <Container>
            <label htmlFor="event-pesquisa">{title}</label>
            <input id = "event-pesquisa" {...rest} />
        </Container>

    )

}