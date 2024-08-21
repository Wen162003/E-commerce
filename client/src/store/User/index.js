import { defineStore } from "pinia";

export const useUserStore= defineStore({
    id: 'user',
    state: ()=>({
        user:{}
    }),
    actions:{
        setUser(user){
            this.user= user;
        }
    },
    persist:true,
}
)