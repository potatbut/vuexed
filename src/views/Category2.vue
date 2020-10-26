<template>
  <div class="category2">
    <h1>This is an category2</h1>
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
