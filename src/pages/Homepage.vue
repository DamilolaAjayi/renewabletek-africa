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
