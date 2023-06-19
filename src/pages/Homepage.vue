<template>
  <section id="homepage" class="section">
    <div class="hero-page section-container">
      <header class="hero-page__header">
        <h2 class="hero-page__title">Renewable Energy Consulting Firm</h2>
        <p class="hero-page__subtitle">
          RenewableTek is committed to providing clean and sustainable solutions
          that will close the power gap that exists within sub-saharan Africa.
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero-page {
  padding-top: 10rem;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(255, 255, 255, 0.73)
    ),
    url(https://ik.imagekit.io/7dkc9ii1v1r/solar-panel-cell-dramatic-sunset-sky-background-clean-alternative-power-energy-concept-min_RcVKg15PY.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hero-page__header {
  padding: 3rem 0;
}
.hero-page__title {
  padding: 2rem 0;
}
@media screen and (min-width: 768px) {
  .hero-page {
    height: 100vh;
    max-width: 144rem;
    margin: 0 auto;
    min-height: 50rem;
    padding-bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.52),
        rgba(255, 255, 255, 0.73)
      ),
      url(https://ik.imagekit.io/7dkc9ii1v1r/solar-panel-cell-dramatic-sunset-sky-background-clean-alternative-power-energy-concept-min_RcVKg15PY.jpg);
  }
  .hero-page__header {
    padding: 10rem 0 3rem;
  }
  .hero-page__title {
    width: max-content;
    padding: 2rem 0;
  }
  .hero-page__subtitle {
    max-width: 50%;
  }
}
@media screen and (max-width: 767px) {
  .section {
    min-height: 60rem;
  }
  .section-container {
    padding-bottom: 0;
  }
}
</style>
