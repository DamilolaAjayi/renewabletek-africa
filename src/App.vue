<template>
  <div id="app">
    <homepage />
    <way-of-business />
    <el-footer />
  </div>
</template>

<script>
import ElFooter from './components/ElFooter';
import Homepage from './pages/Homepage';
import WayOfBusiness from './pages/WayOfBusiness';

export default {
  name: 'App',
  components: {
    Homepage,
    WayOfBusiness,
    ElFooter,
  }
}
</script>

<style src="./assets/css/reset.css"></style>
<style src="./assets/css/variables.css"></style>
<style src="./assets/css/main.css"></style>

<style>
</style>
