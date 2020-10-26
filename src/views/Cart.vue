<template >
  <div class="cart">
    <h1 >Cart</h1>
    <div class='d-flex align-items-stretch flex-wrap'>
      <CartComp 
        v-bind:cartData='cart'
      />
    </div>
  </div> 
</template>

<script>
import CartComp from '../components/CartComp'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartComp
  },
  computed: mapGetters(['cart']),
}
</script>

<style>
  .cart {
    margin: auto;
  }
</style>