<template>
  <div class="page" >
    <h1>Component Test</h1>
      <div class="card-deck cards">
        <div class="card-body" v-for="product in allProducts" :key="product.id" style="width: 300px">
          <img :src="product.url" class="card-img-top" alt="...">
          <h5 class="card-title">{{product.title}}</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Page',
  computed: mapGetters(['allProducts']),
  async mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
  .page{
    margin: auto;
  }
</style>
