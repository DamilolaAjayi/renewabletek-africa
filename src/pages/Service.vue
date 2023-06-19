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
              <div class="service-list">
                <ul>
                  <li>- Field audit and electrification verification</li>
                  <li>- Conceptual and Detailed Design</li>
                  <li>- Engineering Studies and Calculations</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <procurement-icon />
            </div>
            <div>
              <p>Procurement</p>
              <div class="service-list">
                <ul>
                  <li>- Equipment selection</li>
                  <li>- Vendor selection</li>
                  <li>- Equipment and material procurement</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <construction-icon />
            </div>
            <div>
              <p>Construction</p>
              <div class="service-list">
                <ul>
                  <li>- Project and Construction Management</li>
                  <li>- Field engineering services</li>
                  <li>- Installation and Commissioning</li>
                  <li>- Quality Assurance/Quality Control</li>
                  <li>- Metering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="services-two">
          <div class="service-card">
            <div class="service-card__image">
              <maintenance-icon />
            </div>
            <div>
              <p>Post Installation Support/Maintenance</p>
              <div class="service-list">
                <ul>
                  <li>- Preventative and Corrective Maintenance</li>
                  <li>- Remote monitoring, control and reporting</li>
                  <li>- Repairs and Inspections</li>
                  <li>- Warranty Administration</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="service-card">
            <div class="service-card__image">
              <training-icon />
            </div>
            <div>
              <p>Talent Hub - Recruitment and Training</p>
              <div class="service-list">
                <ul>
                  <li>- <b>Talent Sourcing</b> - Contract, Short Term and Permanent roles</li>
                  <li>- Talent Assessment</li>
                  <li>- Technical and Non-technical training</li>
                </ul>
              </div>
            </div>
          </div>
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
  padding: 2rem;
  width: 25rem;
  margin: 1.5rem auto;
  background-color: rgba(118, 120, 142, 0.05);
}
p {
  font-weight: 600;
  padding: 2rem 0 1rem;
}
.service-card__image {
  width: 8rem;
  margin: 0 auto;
}
.section__header {
  padding-bottom: 1rem;
}
.service-card__image svg {
  max-width: 100%;
  height: auto;
}
.service-list {
  line-height: 2rem;
  font-weight: 300;
}
  @media screen and (min-width: 768px) {
    .bg {
      padding: 6rem 6%;
    }
    .section__header {
      padding-bottom: 4rem;
    }
    .service-card {
      width: auto;
    }
    .services {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 50px;
      grid-row-gap: 50px;
    }
    .services-two {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      margin-top: 3rem;
    }
    .service-card__image {
      max-width: 8rem;
    }
    .service-card__image svg {
      max-width: 100%;
      height: auto;
    }
    .service-list {
      font-size: 1.4rem;
    }
  }
</style>
