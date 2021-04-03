<template>
  <section id="services" class="section">
    <div class="bg">
        <h3 class="section__header">Services we provide include:</h3>
        <section class="services">
          <div class="service-card">
            <div class="service-card__image">
              <engineering-icon />
            </div>
            <div>
              <p>Engineering</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <procurement-icon />
            </div>
            <div>
              <p>Procurement</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <construction-icon />
            </div>
            <div>
              <p>Construction</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <maintenance-icon />
            </div>
            <div>
              <p>Maintenance</p>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <training-icon />
            </div>
            <div>
              <p>Training</p>
            </div>
          </div>
          <!-- <div class="service-card">
            <div>
              <img src="" alt="">
            </div>
            <div>
              <p>Development of renewable energy assets across sub-saharan Africa</p>
            </div>
          </div> -->
        </section>
    </div>
  </section>
</template>

<script>
import ConstructionIcon from '../components/global/icons/construction';
import EngineeringIcon from '../components/global/icons/engineering-icon';
import MaintenanceIcon from '../components/global/icons/maintenance';
import ProcurementIcon from '../components/global/icons/procurement';
import TrainingIcon from '../components/global/icons/training';

export default {
  name: 'service',
  components: {
    EngineeringIcon,
    ProcurementIcon,
    ConstructionIcon,
    MaintenanceIcon,
    TrainingIcon,
  }
}
</script>

<style scoped>
.section {
  min-height: 30vh;
}
.bg {
    padding: 3rem 2rem;
}
.service-card {
  text-align: center;
  padding: 2rem 2rem 0.5rem;
  width: 25rem;
  border-radius: 9px;
  margin: 1.5rem auto;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(118, 120, 142, 0.05);
}
p {
  opacity: 0.7;
  padding: 2rem 0 1rem;
}
.service-card__image {
  width: 15rem;
  margin: 0 auto;
}
.section__header {
  padding-bottom: 1rem;
}
.service-card__image svg {
  max-width: 100%;
  height: auto;
}
  @media screen and (min-width: 768px) {
    .bg {
      padding: 6rem 6%;
    }
    .section__header {
      padding-bottom: 4rem;
    }
    .service-card {
      width: 20rem;
      box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
    .services {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      grid-column-gap: 50px;
      grid-row-gap: 50px;
    }
    .service-card__image {
      max-width: 15rem;
    }
    .service-card__image svg {
      max-width: 100%;
      height: auto;
    }
  }
</style>
