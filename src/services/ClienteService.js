import { rConsultancyApi } from "./api";

export function create(cliente){
    rConsultancyApi.post('cliente', cliente)
        .then(response =>{
            alert("Criado com sucesso");
        })
        .catch(error =>{
            console.log(error.message);
        })
}

export async function list(){
    const response = await rConsultancyApi.get('cliente');
    return response.data;
}
