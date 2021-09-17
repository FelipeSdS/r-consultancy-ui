import { jsonPlaceHolder } from "./api";

export async function listUsers(params) {
    const response = await jsonPlaceHolder.get('users');
    return response.data;
}