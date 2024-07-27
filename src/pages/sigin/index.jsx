import {useState,useEffect} from "react";
import {Container,Form} from "./styles";
import {Link} from "react-router-dom";
import {Input} from "../../components/input";
import {Select} from "../../components/select";
import {FiMail,FiLock} from "react-icons/fi";
import {Button} from "../../components/button";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/header";
import {Fieldset} from "../../components/fieldset";
import {Section} from "../../components/section";
import {Itens} from "../../components/itens";
import { Api } from "../../services/api";
import axios from "axios";

export function SignIn(){

    const [placa, setPlaca] = useState("");
    const [empresa, setEmpresa] = useState("");

    const {signIn,avaliacao} = useAuth();

    let classificacao;
    let periodoGarantia = 0;
    const custo = (avaliacao?.valuation_value + avaliacao?.expenses_value);
    const percentFipe = `${((custo / avaliacao?.fipe_value) * 100)?.toFixed(0)}%`
    const percentFipeExpCli = `${((avaliacao?.expected_value / avaliacao?.fipe_value) * 100)?.toFixed(0)}%` 
    //avaliacao?.items?.findIndex(i => i?.id === 1)
    const pneus = avaliacao?.items?.[avaliacao?.items?.findIndex(i => i?.id === 1)]?.expenses_value;
    const lataria = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 2)]?.expenses_value;
    const motor = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 3)]?.expenses_value;
    const pintura = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 4)]?.expenses_value;
    const eletrica = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 8)]?.expenses_value;
    const arCondicionado = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 13)]?.expenses_value;
    const cambio = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 5)]?.expenses_value;
    const freios = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 6)]?.expenses_value;
    const tapecaria = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 7)]?.expenses_value;
    const suspensao = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 9)]?.expenses_value;
    const escapamento = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 10)]?.expenses_value;
    const vidros = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 11)]?.expenses_value;
    const paraChoqueTraseiro = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 67)]?.expenses_value;
    const paraChoqueDianteiro = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 69)]?.expenses_value;
    const revisao = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 150)]?.expenses_value;
    const lavagem = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 148)]?.expenses_value;
    const interior = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 17)]?.expenses_value;
    const rodas = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 18)]?.expenses_value;
    const latariaPintura = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 19)]?.expenses_value;
    const abs = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 16)]?.expenses_value;
    const luzInjecao = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 14)]?.expenses_value;
    const airBag = avaliacao?.items?.[avaliacao?.items.findIndex(i => i?.id === 15)]?.expenses_value;
    const b2b = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 8)]?.avg_value;
    const b2bMax = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 8)]?.max_value;
    const b2bMin = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 8)]?.min_value;
    const avv = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 2)]?.avg_value;
    const avvMax = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 2)]?.max_value;
    const avvMin = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 2)]?.min_value;
    const web = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 1)]?.min_value;
    const percentB2B = `${((custo / b2b) * 100)?.toFixed(0)}%`;
    const margemB2b = b2b - custo;
    const percentMargemB2B = `${((margemB2b / custo) * 100)?.toFixed(0)}%`;
    const b2c = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 7)]?.avg_value;
    const b2cMax = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 7)]?.max_value;
    const b2cMin = avaliacao?.references?.[avaliacao?.references.findIndex(i => i?.id === 7)]?.min_value;
    const percentB2C = `${((custo / b2c) * 100)?.toFixed(0)}%`;
    const margemB2c = b2c - custo;
    const percentMargemB2C = `${((margemB2c/ custo) * 100)?.toFixed(0)}%`;
    const percentFipeSugestao = `${((avaliacao?.proposed_value/avaliacao?.fipe_value) * 100)?.toFixed(0)}%`
    const teste = avaliacao?.items?.name;

    // q1 = "question": "Qual concessionaria foi comprado o veiculo ?"
    const q1 = avaliacao?.questions?.[avaliacao?.questions?.findIndex(i => i?.question_id === 240)]?.answer;
    // q2 = question": "Revisão 10.000KM"
    const q2 = avaliacao?.questions?.[avaliacao?.questions?.findIndex(i => i?.question_id === 241)]?.answer;
    // q3 = "question": "Revisão 20.000KM",
    const q3 = avaliacao?.questions?.[avaliacao?.questions?.findIndex(i => i?.question_id === 242)]?.answer;
    // q4 = "question": "Revisão 30.000KM"
    const q4 = avaliacao?.questions?.[avaliacao?.questions?.findIndex(i => i?.question_id === 243)]?.answer;
    // q5 = "question": "Todas as revisões feitas em concessionárias?"
    const q5 = avaliacao?.questions?.[avaliacao?.questions?.findIndex(i => i?.question_id === 154)]?.answer;
    

    switch(avaliacao?.rating) {
        case 1:
            classificacao = "A"
          break;
        case 2:
            classificacao = "B"
          break;
        case 3:
            classificacao = "C"
            break;
        case 4:
            classificacao = "D"
            break;
        case 5:
            classificacao = "E"
            break;
        default:
          ""
      }


    function garantia(){
        if(avaliacao?.vehicle?.make?.name == "HONDA" || avaliacao?.vehicle?.make?.name == "FIAT"
        || avaliacao?.vehicle?.make?.name == "CHEVROLET" || avaliacao?.vehicle?.make?.name == "NISSAN"
        || avaliacao?.vehicle?.make?.name == "RENAULT" || avaliacao?.vehicle?.make?.name == "JEEP"
        || avaliacao?.vehicle?.make?.name == "VOLKSWAGEN" || avaliacao?.vehicle?.make?.name == "HYUNDAI"
        || avaliacao?.vehicle?.make?.name == "FORD"){
            periodoGarantia = 3;
        }

        if(avaliacao?.vehicle?.make?.name == "BYD" || avaliacao?.vehicle?.make?.name == "TOYOTA"
        || avaliacao?.vehicle?.make?.name == "MITSUBISHI"
        || avaliacao?.vehicle?.make?.name == "GWM"){
            periodoGarantia = 5;
        }


        if(avaliacao?.vehicle?.make?.name == "NISSAN" && avaliacao?.vehicle?.model?.name == "FRONTIER"){
            periodoGarantia = 6;
        }

        if(avaliacao?.vehicle?.make?.name == "BMW"){
            periodoGarantia = 2;
        }

        const ano = Number(avaliacao?.vehicle?.assembly);

        const anoGarantia = ano + periodoGarantia;

        const dataAtual = new Date();

        const anoAtual = dataAtual.getFullYear();

        const anosRestantes = anoGarantia - anoAtual

        let statusGarantia = ""

        if(anosRestantes < 0){
            statusGarantia = "Fora de garantia"
        }else{
            statusGarantia = `Garantia vai até ${anoGarantia}`
        }

        return statusGarantia
    }

    function periodoGarantiaAno(){

        if(avaliacao?.vehicle?.make?.name == "HONDA" || avaliacao?.vehicle?.make?.name == "FIAT"
        || avaliacao?.vehicle?.make?.name == "CHEVROLET" || avaliacao?.vehicle?.make?.name == "NISSAN"
        || avaliacao?.vehicle?.make?.name == "RENAULT" || avaliacao?.vehicle?.make?.name == "JEEP"
        || avaliacao?.vehicle?.make?.name == "VOLKSWAGEN" || avaliacao?.vehicle?.make?.name == "HYUNDAI"
        || avaliacao?.vehicle?.make?.name == "FORD"){
            periodoGarantia = 3;
        }

        if(avaliacao?.vehicle?.make?.name == "BYD" || avaliacao?.vehicle?.make?.name == "TOYOTA"
        || avaliacao?.vehicle?.make?.name == "MITSUBISHI"
        || avaliacao?.vehicle?.make?.name == "GWM"){
            periodoGarantia = 5;
        }


        if(avaliacao?.vehicle?.make?.name == "NISSAN" && avaliacao?.vehicle?.model?.name == "FRONTIER"){
            periodoGarantia = 6;
        }

        if(avaliacao?.vehicle?.make?.name == "BMW"){
            periodoGarantia = 2;
        }

        const ano = Number(avaliacao?.vehicle?.assembly);

        const anoGarantia = ano + periodoGarantia;

        const dataAtual = new Date();

        const anoAtual = dataAtual.getFullYear();

        const anosRestantes = anoGarantia - anoAtual

        let statusGarantia = ""

        if(anosRestantes < 0){
            statusGarantia = "Fora de garantia"
        }else{
            statusGarantia = `Garantia vai até ${anoGarantia}`
        }

        return periodoGarantia
    }


    function handleSignIn(){
        signIn({placa,empresa});
    }

    return(
        <Container>

        <Header></Header> 
        <Form>


            <Fieldset title="PESQUISA">
                <Section>
                    <Input title="Pesquise pela placa" onChange={e => setPlaca(e.target.value)}></Input>
                    <div id="select">
                        <label>Empresa</label>
                        <select onChange={e => setEmpresa(e.target.value)}>
                            <option value="#">Selecione uma empresa</option>
                            <option value="101204609">Vouga</option>
                            <option value="101204610">CDA</option>
                            <option value="101185528">Sanauto</option>
                            <option value="101204604">Jangada Renault</option>
                            <option value="101204600">Nissan MT</option>
                            <option value="101204608">Nissan WS</option>
                            <option value="101204605">BYD Carmais</option>
                            <option value="101204612">Honda BS</option>
                            <option value="101204684">Honda WS</option>
                            <option value="101204686">Honda SD</option>
                            <option value="101204687">Honda SUL</option>
                            <option value="101204600">Nossa Moto</option>
                            <option value="101212127">BYD Teresina</option>
                            <option value="101212126">BYD Natal</option>
                            <option value="101212128">GWM SLZ</option>
                        </select>
                    </div>

                    <Button title = "Gerar TCO" onClick={handleSignIn}></Button>
                </Section>
            </Fieldset>

            <Itens>
                <Fieldset title="DADOS DA AVALIAÇÃO">

                    <Input title="Veiculo Avaliado" disabled value={avaliacao?.vehicle?.model?.name +" " +avaliacao?.vehicle?.version?.name}></Input>

                    <Input title="Veiculo de Interesse" disabled value={avaliacao?.interested_vehicle}></Input>
                    <Section>
                    <Input title="KM" disabled value={avaliacao?.vehicle?.mileage}></Input>
                    <Input title="Ano Modelo" disabled value={avaliacao?.vehicle?.year}></Input>
                    </Section>
                    <Section>
                    <Input title="Finalidade" disabled value={avaliacao?.goal_name}></Input>
                    <Input title="Classificacao" disabled value={classificacao}></Input>
                    </Section>
                    <Section>
                    <Input title="Tipo de Avaliação" disabled value={avaliacao?.valuation_type_name}></Input>
                    <Input title="Municipio Vec" disabled value={avaliacao?.vehicle?.city}></Input>
                    </Section>
                    
                    <Section>
                    <Input title="Avaliador" disabled value={avaliacao?.valuer?.name}></Input>
                    <Input title="Vendedor" disabled value={avaliacao?.user?.name}></Input>
                    </Section>
                </Fieldset>

                <Fieldset title="REFERÊNCIAS DE GARANTIA">
                    <Input title="Marca" disabled value={avaliacao?.vehicle?.make?.name}></Input>
                    <Section>
                    <Input title="Ano Fabricacao" disabled value={avaliacao?.vehicle?.assembly}></Input>
                    <Input title="Anos de Garantia" disabled value={periodoGarantiaAno()}></Input>
                    </Section>
                    <Input title="Provavel Garantia" disabled value={garantia()}></Input>
                    <Section>
                    <Input title="Concessionaria Origem" disabled value={q1}></Input>
                    <Input title="Revisoes na concessionaria" disabled value={q5 == 1 ? "Sim" : "Nao"}></Input>
                    </Section>
                     <Section>
                    <Input title="Revisão 10.000KM" disabled value={q2 == 1 ? "Sim" : "Nao"}></Input>
                    <Input title="Revisão 20.000KM" disabled value={q3 == 1 ? "Sim" : "Nao"}></Input>
                    </Section>
                    <Input title="Revisão 30.000KM" disabled value={q4 == 1 ? "Sim" : "Nao"}></Input>
                </Fieldset>

            </Itens>

            <Fieldset title="REFERÊNCIAS">
                    <Section>
                        <Input title="Valor Avaliado" disabled value={avaliacao?.valuation_value}></Input>
                        <Input title="Gasto Previsto" disabled value={avaliacao?.expenses_value}></Input>
                        <Input title="Top" disabled value={avaliacao?.top_dealer}></Input>
                        <Input title="Custo" disabled value = {custo}></Input>
                    </Section>
                    <Section>
                        <Input title="Fipe" disabled value={avaliacao?.fipe_value}></Input>
                        <Input title="% Fipe" disabled value={percentFipe}></Input>
                    </Section>

                    <Section>
                        <Input title="COMPRA LOJAS FORTALEZA" disabled value={Number(avv).toFixed(0)}></Input>
                        <Input title="COMPRA LOJAS CE" disabled value={Number(avvMax).toFixed(0)}></Input>
                        <Input title="COMPRA LOJAS BRASIL" disabled value={Number(avvMin).toFixed(0)}></Input>
                    </Section>

                    <Section>
                        <Input title="B2B FORTALEZA" disabled value={Number(b2b).toFixed(0)}></Input>
                        <Input title="B2B CE" disabled value={Number(b2bMax).toFixed(0)}></Input>
                        <Input title="B2B BRASIL" disabled value={Number(b2bMin).toFixed(0)}></Input>
                        <Input title="% Margem B2B" disabled value = {percentMargemB2B}></Input>
                    </Section>
                    <Section>
                        <Input title="B2C FORTALEZA" disabled value={Number(b2c).toFixed(0)}></Input>
                        <Input title="B2C CE" disabled value={Number(b2cMax).toFixed(0)}></Input>
                        <Input title="B2C BRASIL" disabled value={Number(b2cMin).toFixed(0)}></Input>
                        <Input title="% Margem B2C" disabled value={percentMargemB2C}></Input>
                    </Section>

                    <Section>
                        <Input title="WEB MOTORS" disabled value={Number(web).toFixed(0)}></Input>
                    </Section>

                    
                    <Section>
                        <Input title="Sugestao Venda" disabled value={avaliacao?.proposed_value}></Input>
                    </Section>
                    <Section>
                        <Input title="Expectativa Cliente" disabled value={avaliacao?.expected_value}></Input>
                        <Input title="% Exp Cliente x Fipe" disabled value={percentFipeExpCli}></Input>
                    </Section>
                </Fieldset>

            <Fieldset title="ITENS AVALIADOS">
                <Section>
                    <Input title="PNEUS" disabled value={pneus}></Input>
                    <Input title="LATARIA" disabled value={lataria}></Input>
                    <Input title="MOTOR" disabled value={motor}></Input>
                    <Input title="PINTURA" disabled value={pintura}></Input>
                </Section>
                <Section>
                    <Input title="ELETRICA" disabled value={eletrica}></Input>
                    <Input title="AR CONDICIONADO" disabled value={arCondicionado}></Input>
                    <Input title="CAMBIO" disabled value={cambio}></Input>
                    <Input title="FREIOS" disabled value={freios}></Input>
                </Section>
                <Section>
                    <Input title="TAPECARIA" disabled value={tapecaria}></Input>
                    <Input title="SUSPENSAO" disabled value={suspensao}></Input>
                    <Input title="ESCAPAMENTO" disabled value={escapamento}></Input>
                    <Input title="VIDROS" disabled value={vidros}></Input>
                </Section>

                <Section>
                    <Input title="PARA CHOQUE TRASEIRO" disabled value = {paraChoqueTraseiro}></Input>
                    <Input title="PARA CHOQUE DIANTEIRO" disabled value = {paraChoqueDianteiro}></Input>
                    <Input title="REVISAO" disabled value={revisao}></Input>
                    <Input title="LAVAGEM" disabled value = {lavagem}></Input>
                </Section>

                <Section>
                    <Input title="INTERIOR" disabled value = {interior}></Input>
                    <Input title="RODAS" disabled value = {rodas}></Input>
                    <Input title="LATARIA E PINTURA" disabled value={latariaPintura}></Input>
                    <Input title="ABS" disabled value = {abs}></Input>
                </Section>

                <Section>
                    <Input title="LUZ DA INJECAO" disabled value={luzInjecao}></Input>
                    <Input title="AIR BAG" disabled value={airBag}></Input>
                    <Input title="AIR BAG" disabled value={teste}></Input>
                </Section>

            </Fieldset>



        </Form>


        </Container>
    )
}
