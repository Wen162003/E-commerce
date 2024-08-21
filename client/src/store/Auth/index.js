//importar una funcion para definir el store 
import { defineStore } from "pinia";
 //aca creamos el store y lo exportamos
export const useAuthStore = defineStore({
    //le asiganos un id unico
    id:'auth',
    //Declaramos los estados
    state: ()=>({
        token:'',
    }),
    actions:{
        setToken(token){
            this.token= token
        }
    },
    persist:true,
});