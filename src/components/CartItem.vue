<template>
    <div class="cartItem">
        <img :src="cartItemData.url" class="card-img-top">
        <h5 class="card-title" >{{cartItemData.title}}</h5>
        <button  href="#" class="btn btn-primary">Delete</button>
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
    }
}
</script>

<style >
    .cartItem {
        width: 250px;
        
    }
</style>