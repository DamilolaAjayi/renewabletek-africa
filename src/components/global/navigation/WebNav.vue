<template>
  <div class="web-nav">
    <a href="#homepage" class="web-nav-link active" v-smooth-scroll="{ duration: 1000, offset: -50 }">Home</a>
    <a href="#about" class="web-nav-link" v-smooth-scroll="{ duration: 1000, offset: -50 }">About</a>
    <a href="#people" class="web-nav-link" v-smooth-scroll="{ duration: 1000, offset: -50 }">Contact</a>
  </div>
</template>

<script>
export default {
  name: 'web-nav',
};
</script>

<style scoped>
.web-nav {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
}
.web-nav-link {
  padding: 0 0.5rem;
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: var(--neutralOne);
}
.web-nav-link:nth-child(-n + 2) {
  margin-right: 5rem;
}
.web-nav-link:hover {
  border-bottom: 0.1rem solid rgba(255, 194, 104, 0.5);
}
@media screen and (min-width: 768px) {
  .active {
    width: max-content;
    border-bottom: 0.1rem solid var(--primaryOne);
  }
}
</style>
