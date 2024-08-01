<template>
  <!-- esta renderizando los datos d un solo producto   -->
  <div class="ui card product">
    <div class="image">
      <!-- <img :src="API_URL + product.image.url" :alt="Product.name" /> -->
      <p>producto</p>
    </div>
    <!-- <div class="contenct">
      <div class="header">{{ product.name }}</div>
      <div class="description">{{ product.price }}</div>
    </div> -->
    <div class="ui button primary">comprar</div>
  </div>
  <!-- <p>{{ getProductsApi.name }}</p> -->
</template>

<script>
import { API_URL } from "../utils/constants";
export default {
  name: "product",
  props: {
    product: Object,
  },
  setup(props) {
    console.log(props.product);

    return {
      API_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    .ui.button {
      min-height: 36px;
    }
  }

  .ui.button {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;
  }
}
</style>