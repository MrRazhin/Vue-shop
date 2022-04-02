<template>
    <ul class="catalog__list">
      <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product">
      </ProductItem>
    </ul>
</template>

<script>
/* eslint max-len: ["error", { "code": 800 }] */

import ProductItem from './ProductItem.vue';

export default {

  components: { ProductItem },
  props: ['products'],
};
</script>
