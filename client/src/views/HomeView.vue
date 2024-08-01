<template>
  <BasicLayoutVue>
    <h1>Ultimos productos</h1>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product"
      >
        <product :product="product"  />
      </div>
    </div>
  </BasicLayoutVue>
</template>

<script>
import BasicLayoutVue from "../layouts/BasicLayout.vue";
import { getProductsApi } from "../api/product";
import { ref, onMounted } from "vue";
import product from "@/components/product.vue";

export default {
  name: "HomeView",
  components: {
    BasicLayoutVue,
    product,
  },
  setup() {
    let products = ref(null);

    onMounted(async () => {
      // async para peticion asincrona
      // aca le estamos diciendo de que traiga los ultimos tres productos
      const response = await getProductsApi(6);
      // console.log(response);
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>
