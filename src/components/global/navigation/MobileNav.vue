<template>
  <div class="nav__dropdown">
    <div class="nav-dropdown__list">
      <a href="#homepage" class="nav-link" @click="hideNavBody">Home</a>
      <a href="#services" class="nav-link" @click="hideNavBody">Services</a>
      <router-link :to="{name: 'About'}" :class="'nav-link'" @click="hideNavBody">About</router-link>
      <a href="#footer" class="nav-link" @click="hideNavBody">Contact</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mobile-nav',
  
  methods: {
    hideNavBody() {
      this.$emit('closeMobileNav');
    },
  }
};
</script>

<style scoped>
.nav-link {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.nav-dropdown__list {
  position: absolute;
  border-radius: 4px;
  background-color: var(--semanticTwo);
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 10px;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
