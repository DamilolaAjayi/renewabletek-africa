<template>
  <div id="app">
    <navigation />
    <homepage />
    <partner />
    <service />
    <value />
    <el-footer />
  </div>
</template>

<script>
import ElFooter from './components/ElFooter';
import Homepage from './pages/Homepage';
import Navigation from './components/global/navigation/Nav';
import Partner from './pages/Partner';
import Service from './pages/Service';

import Value from './pages/Value';

export default {
  name: 'App',
  components: {
    Homepage,
    Navigation,
    Partner,
    Service,
    Value,
    ElFooter,
  }
}
</script>

<style src="./assets/css/reset.css"></style>
<style src="./assets/css/variables.css"></style>
<style src="./assets/css/main.css"></style>

<style>
  .bg {
    max-width: 144rem;
    margin: 0 auto;
  }
</style>
