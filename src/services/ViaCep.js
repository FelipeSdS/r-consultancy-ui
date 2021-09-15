import { viaCep } from "./api";

export async function findByCep(paramCep){
    const response = await viaCep.get(`${paramCep}/json`)
    return response.data;
}