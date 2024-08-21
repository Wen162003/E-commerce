<template>
  <!-- esta renderizando los datos d un solo producto   -->
  <div class="ui card product">
    <div class="image">
      <img :src="'http://localhost:1337'+ product.attributes.image.data[0].attributes.url" :alt="product.attributes.name" />
      <p>producto</p>
    </div>
    <div class="contenct">
      <div class="header">{{ product.attributes.name }}</div>
      <div class="description">${{ product.attributes.price }}</div>
    </div>
    <div class="ui button primary">comprar</div>
  </div>
</template>

<script>
import { API_URL } from "../utils/constants";
export default {
  name: "product",
  props: {
    product: Object,
  },
  setup(props) {
    console.log('estoy en product'); 
    console.log(props.product.attributes.image.data[0].attributes.url);

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