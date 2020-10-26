<template>
    <div class="cartItem">
        <img :src="cartItemData.url" class="card-img-top">
        <h5 class="card-title" >{{cartItemData.title}}</h5>
        <button @click="deleteFromCart()" href="#" class="btn btn-primary">Delete</button>
    </div>
    
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cartItemData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style >
</style>