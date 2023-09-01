import {Container,Links,Content} from './styles'

import {Header} from '../../components/header'
import {Button} from '../../components/button'
import {Section} from '../../components/section'
import {Tag} from '../../components/tag'
import {ButtonText} from '../../components/buttonText'

export function Details(){
  return (
    <Container>

      <Header />

      <main>
        <Content>


          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Porro architecto, 
            doloremque quaerat cupiditate necessitatibus 
            atque voluptates deserunt harum rerum quia 
            soluta eum quam sunt dolore dolor assumenda 
            omnis. Repellendus, fugit.
          </p>
          <Section title = "Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>



          <Button title="Voltar"/>

      </Content>
      </main>
    </Container>
  )
}

// coloquei uma propriedade title dentro do componente de botao para receber como
// parametro no arquivo do componente para que possamos apresentar o conteudo dele
// flexivel, ou seja, usamos o mesmo componente, mas com conteudo interno diferente


/* essa pagina é o index desse componente details, quando importado no main.jsx ele
executa o conteudo que tem aqui. esse componente tem um função que retorna um elemento html
pela regra do react so pode ser retornado um elemento por componente, entao podemos retornar uma
fragment que dentro dela pode ter vários elementos html  */