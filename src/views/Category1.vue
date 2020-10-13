<template>
  <div class="category1">
    <h1>This is an category1</h1>
    <div class="d-flex align-items-stretch flex-wrap"> 
      <Page />
    </div>
  </div>
</template>

<script>
import Page from '../components/Page'
export default {
  name: 'Category1',
  data() {
    return {

    }
  },
  components: {
    Page
  }
}
</script>
<style>
  
</style>