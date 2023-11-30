import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(params) {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;

        const response = await fetch(url);
        console.log(response)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        throw error;
    }
}