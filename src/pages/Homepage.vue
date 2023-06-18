<<<<<<< HEAD
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
      <div class="services-list">
        <section class="services-list__card">
          <engineering-icon />
          <div class="services-list-card__textbox">
            <p>Engineering</p>
          </div>
        </section>
        <section class="services-list__card">
          <procurement-icon />
          <div class="services-list-card__textbox">
            <p>Procurement</p>
          </div>
        </section>
        <section class="services-list__card">
          <construction-icon />
          <div class="services-list-card__textbox">
            <p>Construction</p>
          </div>
        </section>
        <section class="services-list__card">
          <maintenance-icon />
          <div class="services-list-card__textbox">
            <p>Maintenance</p>
          </div>
        </section>
        <section class="services-list__card">
          <training-icon />
          <div class="services-list-card__textbox">
            <p>Training</p>
          </div>
        </section>
      </div>
      <div class="services-list__last">
          <p class="big-amp">
            &amp;
          </p>
          <h4>Development of renewable energy assets across sub-saharan Africa.</h4>
      </div>
    </div>
    </main>
</template>

<script>
import ConstructionIcon from '../components/global/icons/construction';
import EngineeringIcon from '../components/global/icons/engineering-icon';
import MaintenanceIcon from '../components/global/icons/maintenance';
import ProcurementIcon from '../components/global/icons/procurement';
import TrainingIcon from '../components/global/icons/training';

export default {
  name: 'homepage',
  components: {
    EngineeringIcon,
    ProcurementIcon,
    ConstructionIcon,
    MaintenanceIcon,
    TrainingIcon,
  }
};
</script>

<style scoped>
main {
    height: 100vh;
}
.services-list {
  animation: 2s appear;
}
.services-list__last {
  animation-name: 5s appear;
}
.section-container {
  /* max-width: 40rem;
  margin: 4rem auto; */
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-width: 768px) {
  .hero__header {
    /* font-size: 2.5rem; */
    max-width: 80rem;
    padding-top: 2rem;
    margin-top: 12rem;
  }
  .services-list {
    color: var(--semanticOne);
    font-size: 1.8rem;
    width: 100%;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    margin: 5rem auto 0;
  }
  .services-list__card {
    width: 20rem;
    text-align: center;
    padding: 2rem;
    border-radius: 10px;
    color: var(--secondaryFour);
  }
  .services-list__last {
    text-align: center;
    animation: 10s appear;
  }
  .services-list__last h4 {
    font-weight: 600;
    margin-top: 0.5rem;
    margin-left: 1.5rem;
  }
  .services-list__card svg {
    width: 10.4rem;
    height: 10.4rem;
    fill: var(--semanticOne);
  }
 .services-list-card__textbox {
   margin-top: 1rem;
 }
 .services-list-card__textbox p {
   color: var(--secondaryFour);
 }
 .big-amp {
    margin: 1.5rem 0;
    font-size: 6rem;
 }
}
.highlight {
  color: var(--primaryOne);
}
</style>
=======
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
>>>>>>> 20ce3df6953d1ce4f00e9055ac04ad8ff14db142
