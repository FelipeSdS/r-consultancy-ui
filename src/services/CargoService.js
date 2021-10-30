import { rConsultancyApi } from "./api";

export async function criarNovoCargo(cargoRequest){
    await rConsultancyApi.post('cargo', cargoRequest)
    .then(response =>{
        return "";
    })
    .catch(error =>{
        console.log(error.response.data.message);
        return error;
    })
}

export async function buscarCargoPorDepartamentoId(idDepartamento){
    const response = await rConsultancyApi.get(`cargo/departamento/${idDepartamento}`);
    return response.data;
}