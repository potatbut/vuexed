<template >
  <div class="bag" v-bind:cartData="cart">
    <h1>Cart</h1>
    <CartItem  
      v-for="item in cartData"
      :key="item.id"
      :cartItemData="item" 
    />
  </div>
</template>

<script>
import CartItem from '../components/CartItem'
import {mapGetters} from 'vuex'
export default {
  name: 'Bag',
  components: {
    CartItem,
  },
  computed: mapGetters(['cart']),
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>