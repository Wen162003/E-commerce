import {API_URL} from "../utils/constants";

// Trayendo los ultimos 20 productos guardados
export async function getProductsApi(Limit = 1000){
    try {
        const response = await fetch(
            // lo que me llegue en limit me va llegar a la ${} de abajo
            `${API_URL}/products?_sort=createdAt:desc&_limit=${Limit}`
        )
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// filtrando por categorias
export async function getProductCategory(category){
   try {
     const response = await fecth()
   } catch (error) {
    console.log(error);
    return null;
   }
}