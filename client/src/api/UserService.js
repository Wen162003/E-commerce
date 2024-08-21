//importamos la libreria axios de peticiones htpp, axios usa fetch pero la sintaxis es mas sencilla
import axios from "axios";

//creamos una clase, que va tener las peticiones a la api
class UserService{
    //creamos un atributo, que es la url de la api, a la cual vamos hacer las peticiones
    urlBase='http://localhost:1337/api'

   async login(data){
        try {
            const response = await axios.post(`${this.urlBase}/auth/local`,data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async register(data){
        try {
            const response = await axios.post(`${this.urlBase}/auth/local/register`,data );
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export default UserService;