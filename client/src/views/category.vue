<template>
  <BasicLayout>
    <h3>Categorias</h3>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in categorias"
        :key="product"
      >
      <p>{{ product.attributes.name }}</p>
        <product :product="product"  />
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
import product from "@/components/product.vue";
import ProductService from "../api/ProductService";

export default {
  name: "category",
  components: {
    BasicLayout,
    product,
  },
  setup() {
    const route = useRoute();
    const service = new ProductService();

    const categorias = ref([]);

    const getAll = async () => {
      const response = await service.getAll();
      categorias.value = response.data.filter(product => 
        product.attributes.category.data.id == route.params.category
      );
      console.log(categorias.value);
    };

    onMounted(async () => {
      await getAll();
    });

    watch(() => route.params.category, async () => {
      await getAll();
    });

    return {
      categorias,
    };
  }
};
</script>

<style></style>
