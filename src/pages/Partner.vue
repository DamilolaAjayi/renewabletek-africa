<template>
  <section id="partner" class="section">
    <div class="bg">
      <div class="partner__textbox">
        <p>
          We partner with our clients to support the
          <span class="hightlight">safe and efficient production</span>,
          <span class="hightlight">delivery</span>,&nbsp;and&nbsp;
          <span class="hightlight">use of renewable energy</span>.
        </p>
        <p>
          We seek to foster a positive and innovative culture which we carry
          into our projects and give our clients powerful solutions.
        </p>
      </div>
      <div class="hero-page__carousel-parent">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
        >
          <div class="hero-page__carousel">
            <div class="solar-illustration">
              <img
                src="@/assets/images/renewable-project.png"
                alt="renewable energy company"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partner',
}
</script>

<style scoped>
.section {
  background: var(--neutralFour);
  padding: 3rem 2rem;
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