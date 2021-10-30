import axios from 'axios';

export const viaCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

export const jsonPlaceHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const rConsultancyApi = axios.create({
    baseURL : 'https://r-consultancy-api.herokuapp.com/',
})