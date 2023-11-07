import { createContext, useContext, useState } from "react";
import { Api } from "../services/api";
import axios from "axios";


export const AuthContext = createContext({});

function AuthProvider({children}){
    const [avaliacao, setAvaliacao] = useState("");

    async function signIn({placa,empresa}){
        try{
            const postData = {
                "send_images": false, 
                "plate": `${placa}`, 
                "entity_id": `${empresa}`, 
                "get_tag_report": false, 
                "use_city_state_vehicle": true, 
                "use_svt": false, 
                "use_cod_fipe": true, 
                "require_solicitation": false,
                "get_reference_value": true,
            };
  
            const response = await Api.post("/usbi/syncService/getValuation",postData);
            const {data} = response.data;
            setAvaliacao(data);
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possivel se conectar");
                console.log(error)
            }
        }
    }



    return(
        <AuthContext.Provider value={{signIn,avaliacao}} >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider,useAuth};