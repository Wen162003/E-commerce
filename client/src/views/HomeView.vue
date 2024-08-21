<template>
  <BasicLayoutVue>
    <h1>Productos</h1>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product"
      >
      <p>{{ product.attributes.name }}</p>
        <product :product="product"  />
      </div>
    </div>
  </BasicLayoutVue>
</template>

<script>
import BasicLayoutVue from "../layouts/BasicLayout.vue";
import { ref, onMounted } from "vue";
import product from "@/components/product.vue";
import ProductService from "../api/ProductService";

export default {
  name: "HomeView",
  components: {
    BasicLayoutVue,
    product,
  },
  setup() {
    let products = ref(null);
    // instanciando un objeto de una claseeeee
    const service = new ProductService();

    onMounted(async () => {
      // async para peticion asincrona
      // aca le estamos diciendo de que traiga los ultimos tres productos
      const response = await service.getAll();
      console.log(response.data);
      products.value = response.data;
    });

    return {
      products,
    };
  },
};
</script>
