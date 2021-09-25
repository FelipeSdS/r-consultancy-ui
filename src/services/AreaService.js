import { rConsultancyApi } from "./api";

export function create(areaRequest){
    rConsultancyApi.post('area', areaRequest)
    .then(response =>{
        alert("Criado com sucesso");
    })
    .catch(error =>{
        console.log(error.message);
    })
}

export async function findByClienteId(idCliente){
    const response = await rConsultancyApi.get(`area/cliente/${idCliente}`);
    return response.data;
}