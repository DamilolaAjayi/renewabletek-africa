<template>
  <section id="services" class="section">
    <div class="bg">
        <h2>Services we provide</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'service',
}
</script>

<style scoped>
.section {
  background: var(--neutralFour);
}
.partner__textbox p:last-of-type {
  padding: 4rem 0;
}
.hero-page__carousel-parent {
  position: relative;
}
.hero-page__carousel {
  width: 100%;
  margin: 0;
}
.solar-illustration img {
  filter: drop-shadow(0 1rem 1rem #c9c8c8);
}
  @media screen and (min-width: 768px) {
    .bg {
      display: flex;
      padding: 6rem 6%;
      align-items: center;
    }
    .partner__textbox {
      width: 50%;
    }
    .partner__textbox p {
      font-size: 2.4rem;
      max-width: 50rem;
    }
    .hero-page__carousel-parent {
      width: 50%;
    }
  }
</style>
