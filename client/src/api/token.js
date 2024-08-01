import {TOKEN} from "../utils/constants";

export function setTokenApi(token){
    localStorage.setItem(TOKEN, token);
}

// Devolver el token en caso de que lo tengo 
export function getTokenApi(){
    return localStorage.getItem(TOKEN);
}