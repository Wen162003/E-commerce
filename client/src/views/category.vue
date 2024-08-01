<template>
  <BasicLayout>
    <h1>Estamos en la categoria</h1>
  </BasicLayout>
</template>

<script>
import {onMounted} from "vue";
import {useRoute} from "vue-router"
import BasicLayout from "@/layouts/BasicLayout.vue";
import {getProductCategory} from "../api/product"
export default {
  name: "category",
  components: {
    BasicLayout,
  },
  watch: {
    $route(to, from) {
      // se supone que si voy a cereales, me debe salir en consola ps cereales y asi con golosinas
      console.log(to);
    },
  },

  // seguimos trabajando en las categorias 
  setup(){
     const {params} = useRoute();

    onMounted(async() =>{
      const response = await getProductCategory(params.category)
      // console.log(response );
    })  
  }
};
</script>

<style>
</style>