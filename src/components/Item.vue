<template>
    <div class='catalogItem'>
        <img :src="item.url" class="card-img-top">
        <h5 class="card-title" >{{item.title}}</h5>
        <button @click="addToCart()" href="#" class="btn btn-primary">Add to cart</button>
    </div>

</template>

<script>
export default {
    name: 'Item',
    props: {
        item: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.item)
        }
    }
}
</script>