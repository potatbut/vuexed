<template>
  <div class="catalog" >
      <div class="card-deck cards">
        <Item
          class="card-body" 
          v-for="product in allProducts" 
          :key="product.id" 
          style="width: 300px" 
          :id="product.id"
          :item="product"
          @addToCart="addToCart"
        />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Item from '../components/Item'

export default {
  name: 'Catalog',
  computed: mapGetters(['allProducts']),
  async mounted() {
    this.$store.dispatch('fetchProducts')
  },
  components: {
    Item,
  },
  methods: {
    ...mapActions([
      'add_To_Cart'
    ]),
    addToCart(data){
      this.add_To_Cart(data)
    }
  }
}
</script>

<style>
  .catalog{
    margin: auto;
  }
</style>
