<template>
  <section id="homepage" class="section">
    <div class="hero-page section-container">
      <header>
        <h2 class="hero-page__title">Renewable Energy Consulting Firm</h2>
        <p class="hero-page__subtitle">
          RenewableTek is committed to providing clean and sustainable solutions
          that will close the power gap that exists within sub-saharan Africa.
        </p>
      </header>
      <div class="hero-page__textbox">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInLeft"
        >
          <div class="hero-page__brief" v-if="loadAnimation">
            <ul>
              <li>Engineering</li>
              <li>Procurement</li>
              <li>Construction</li>
              <li>Maintenance</li>
              <li>Training</li>
              <li>
                Development of renewable energy assets across sub-saharan Africa
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero-page__carousel__image {
  max-height: 40rem;
  object-fit: cover;
  max-width: 60rem;
}
.hero-page__brief {
  color: var(--neutralOne);
  min-height: 13rem;
  padding: 3rem 0;
  font-size: 1.8rem;
}
.hero-page__brief li::before {
  content: "-";
  translate: 0.3s;
  margin-right: 5px;
}
.hero-page__brief li {
  padding-bottom: 0.2rem;
  border-bottom: 0.1px solid var(--primaryOne);
  width: max-content;
}
.hero-page__brief li:hover {
  font-weight: 600;
}
.hero-page__brief li:last-of-type {
  max-width: 30rem;
}
.hero-page__textbox h2 {
  min-height: 10.2rem;
  margin-bottom: 2rem;
}
.hero-page {
  padding-top: 10rem;
}
.hero-page__textbox {
  color: black;
  margin-bottom: 6rem;
}
.hero-page__carousel-parent {
  position: relative;
}
.hero-page__carousel__image {
  border-radius: 6px;
}
.hero-page__brief li {
  padding: 0.8rem 0;
}
.hero-page__carousel__image img {
  z-index: 5;
  height: 40rem;
  border-radius: 6px;
}
.homepage__footer {
  background: var(--semanticFour);
  padding: 3rem 6%;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.1);
}
.homepage__footer p {
  font-weight: 500;
  font-size: 2.5rem;
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
  header {
    padding: 10rem 0 3rem;
  }
  .hero-page__title {
    width: max-content;
    padding: 2rem 0;
  }
  .hero-page__subtitle {
    max-width: 50%;
  }
  .hero-page__carousel-parent {
    width: 50%;
  }
  .hero-page__brief {
    padding: 1rem 0;
    font-size: 2.5rem;
    border-radius: 10px;
  }
  .hero-page__brief li {
    padding: 1rem 0;
  }
  .hero-page__brief li:last-of-type {
    max-width: 50rem;
  }
  .hero-page__textbox {
    color: black;
    max-width: 40%;
    margin-bottom: 0;
  }
  .hero-page__textbox h2 {
    min-height: 10.4rem;
    font-size: 3rem;
  }
  .hero-page__carousel {
    width: 100%;
    max-width: 60rem;
    margin: 0;
    min-height: 45rem;
  }
  h2 span {
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
}
@media screen and (max-width: 767px) {
  .section {
    min-height: 60rem;
  }
  .section-container {
    padding-bottom: 0;
  }
  .hero-page__carousel__image {
    height: auto;
    object-fit: cover;
  }
  .hero-page__carousel__image img {
    height: 20rem;
  }
}
</style>
