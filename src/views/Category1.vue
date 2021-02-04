<template>
  <div class="category1">
    <h1>Это категория 1</h1>
    <div class="d-flex align-items-stretch flex-wrap"> 
      <Catalog />
    </div>
  </div>
</template>

<script>
import Catalog from '../components/Catalog'
export default {
  name: 'Category1',
  components: {
    Catalog
  }
}
</script>
<style>
  
</style>