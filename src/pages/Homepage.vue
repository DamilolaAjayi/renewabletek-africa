<template>
  <main>
      <div class="section-container">
        <p class="logo__body">
        <img
            src="http://placehold.it/200x30"
            alt="RenewableTek Africa Logo"
            class="logo"
        />
        </p>
        <header class="section__header">
        <h2>
            RenewableTek Africa
        </h2>
        </header>
        <section class="hero__body">
            <div class="hero-body__text">
                <p>
                RenewableTek Africa is the premier renewable energy consulting firm
                providing a range of services including; engineering, procurement,
                construction, maintenance, training and development of renewable
                energy assets across sub-saharan Africa.
                </p>
            </div>
            <div>
                <img src="http://placehold.it/600x400" alt="Engineering Projects" />
            </div>
        </section>
      </div>
  </main>
</template>

<script>
export default {
  name: "homepage",
};
</script>

<style scoped>
.logo__body {
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.hero-body__text {
    max-width: 45rem;
}
.hero-body__text p {
    font-size: 2rem;
}
@media screen and (min-width: 768px) {
    .hero__body {
        display: flex;
        justify-content: space-between;
    }
    .hero-body__text p {
        font-size: 2rem;
        margin-top: 10rem;
    }
}
</style>
