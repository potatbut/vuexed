<template >
  <div class="cartComp" > 
    <div class="card-deck cards">
      <CartItem
        class="card-body" 
        style="width: 300px" 
        v-for="(item, index) in cartData"
        :key="'Cart' + index"
        :cartItemData="item"
        @deleteFromCart='deleteFromCart(index)'
      />
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem'
import {mapActions} from 'vuex'

export default {
  name: 'cartComp',
  components: {
    CartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'delete_From_Cart'
    ]),
    deleteFromCart(index) {
      this.delete_From_Cart(index)
    }
  }
}
</script>

<style>
  .cartComp {
    margin: auto;
  }
</style>