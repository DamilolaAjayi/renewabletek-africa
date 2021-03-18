<template>
  <main>
    <div class="section-container">
      <h3 class="hero__header">
        RenewableTek Africa is the premier 
        <span class="highlight">
          renewable energy consulting
        </span>
        firm
        providing a range of services including:
      </h3>
      <div class="hero-page">
        <div class="services">
          <ul class="services-list">
            <li class="services-list__item highlight">engineering</li>
            <li class="services-list__item highlight">procurement</li>
            <li class="services-list__item highlight">construction</li>
            <li class="services-list__item highlight">maintenance</li>
            <li class="services-list__item highlight">training</li>
            <li class="services-list__item highlight">development of renewable energy assets across sub-saharan Africa.</li>
          </ul>
        </div>
        <div class="solar-illustration">
          <img src="@/assets/images/renewable-project.png" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'homepage',
};
</script>

<style scoped>
.services-list {
  animation: 2s appear;
}
.services-list__last {
  /* animation-name: 5s appear; */
}
.section-container {
  /* max-width: 40rem;
  margin: 4rem auto; */
}
@media screen and (min-width: 768px) {
  .hero__header {
    /* font-size: 2.5rem; */
    max-width: 80rem;
    padding-top: 2rem;
    margin-top: 12rem;
  }
  .services-list {
    margin: 3rem 0;
  }
  .hero-page {
    display: flex;
  }
  .services {
    width: 50%;
  }
  .services-list__item {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 1.5rem 0;
    /* opacity: 0.8; */
  }
  .services-list__item:before {
    content: '-';
    translate: 0.3s;
    margin-right: 5px;
  }
}
.highlight {
  color: var(--primaryOne);
}
</style>
