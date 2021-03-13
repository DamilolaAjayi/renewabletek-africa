<template>
  <div id="app">
    <navigation />
    <homepage />
    <!-- <partner /> -->
    <!-- <way-of-business />
    <el-footer /> -->
  </div>
</template>

<script>
// import ElFooter from './components/ElFooter';
import Homepage from './pages/Homepage';
import Navigation from './components/global/navigation/Nav';
// import Partner from './pages/Partner';

// import WayOfBusiness from './pages/WayOfBusiness';

export default {
  name: 'App',
  components: {
    Homepage,
    Navigation,
    // Partner,
    // WayOfBusiness,
    // ElFooter,
  }
}
</script>

<style src="./assets/css/reset.css"></style>
<style src="./assets/css/variables.css"></style>
<style src="./assets/css/main.css"></style>

<style>
</style>
