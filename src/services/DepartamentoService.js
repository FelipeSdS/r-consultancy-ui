import { rConsultancyApi } from "./api";

export function create(departamentoRequest){
    rConsultancyApi.post('departamento', departamentoRequest)
    .then(response =>{
        alert("Criado com sucesso");
    })
    .catch(error =>{
        console.log(error.message);
        
    })
}

export async function findByAreaId(idArea){ 
    const response = await rConsultancyApi.get(`departamento/area/${idArea}`);
    return response.data;
}
