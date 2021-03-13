<template>
  <div class="web-nav">
    <a href="#people" class="web-nav-link" v-smooth-scroll="{ duration: 1000, offset: -50 }">People</a>
    <a href="#partner" class="web-nav-link" v-smooth-scroll="{ duration: 1000, offset: -50 }">Partner</a>
  </div>
</template>

<script>
export default {
  name: "web-nav",
};
</script>

<style scoped>
.web-nav {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
}
.web-nav-link {
  padding: 0 2rem;
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  text-align: left;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
}
.web-nav-link:last-child {
  padding-right: 0;
}
</style>
