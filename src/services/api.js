import axios from 'axios';

export const viaCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

export const jsonPlaceHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const rConsultancyApi = axios.create({
    baseURL: 'http://localhost:8080/'
})