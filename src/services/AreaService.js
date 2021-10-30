import { rConsultancyApi } from "./api";

export async function create(areaRequest){
    await rConsultancyApi.post('area', areaRequest)
    .then(response =>{
        return "";
    })
    .catch(error =>{
        console.log(error.response.data.message);
        return error.response.data.message;
    })
}

export async function findByClienteId(idCliente){
    const response = await rConsultancyApi.get(`area/cliente/${idCliente}`);
    return response.data;
}