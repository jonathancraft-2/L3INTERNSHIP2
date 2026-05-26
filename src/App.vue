<script setup>
 import Footer from './components/footer.vue'
 import navbar from './components/navbar.vue'
</script>

<template>
 <div class="nav">
<navbar />
</div>

<div class="foot">
  <Footer />
</div>
</template>
<style scoped>
 .nav{
  background-color: rgb(167, 167, 255);
  padding-bottom: 16px;
  padding-top: 10px;
  
 }
</style>