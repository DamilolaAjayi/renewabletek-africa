<template>
  <main>
    <div class="section-container">
      <header class="section__header">
        <h2>
          RenewableTek Africa
        </h2>
      </header>
      <section class="hero__body">
        <p class="hero-body__text">
          RenewableTek Africa is the premier renewable energy consulting firm
          providing a range of services including; engineering, procurement,
          construction, maintenance, training and development of renewable
          energy assets across sub-saharan Africa.
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'homepage',
};
</script>

<style scoped>
main {
    height: 100vh;
}
.section__header h2 {
  text-align: center;
  animation: 2s appear;
}
.hero-body__text {
  background: var(--neutralTwo);
  font-size: 2rem;
  padding: 2rem;
  border-radius: 6px;
  margin-top: 6rem;
}
.section-container {
  max-width: 40rem;
  margin: 4rem auto;
}
.hero-body__text p {
  font-size: 2rem;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
@media screen and (min-width: 768px) {
  .hero-body__text {
    font-size: 2.5rem;
    margin-top: 10rem;
  }
  .section-container {
    max-width: 80rem;
    margin: 0 auto;
  }
}
</style>
