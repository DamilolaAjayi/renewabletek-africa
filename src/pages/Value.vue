<template>
  <section class="section">
    <div class="bg">
      <div class="section-container">
        <header class="section__header">
          <h3>These four principles govern the way we do business:</h3>
        </header>
        <section class="business__principles">
          <div class="business-principles__block">
            <div class="business-principles__image">
              <img
                src="@/assets/images/value/value-creation.png"
                alt="value creation icon"
              />
            </div>
            <div>
              <h3>Distinctive value creation</h3>
            </div>
          </div>
          <div class="business-principles__block">
            <div>
              <h3>Priority on customer success</h3>
            </div>
            <div class="business-principles__image">
              <img
                src="@/assets/images/value/customer-success.png"
                alt="satisfaction icon"
              />
            </div>
          </div>
          <div class="business-principles__block">
            <div class="business-principles__image">
              <img
                src="@/assets/images/value/excellence.jpg"
                alt="distribution icon"
              />
            </div>
            <div>
              <h3>Excellence in every project</h3>
            </div>
          </div>
          <div class="business-principles__block">
            <div>
              <h3>Continuous employee development</h3>
            </div>
            <div class="business-principles__image">
              <img
                src="@/assets/images/value/employee-development.png"
                alt="employee development icon"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'value',
};
</script>

<style scoped>
.business-principles__block {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    text-align: center;
}
.business-principles__block:nth-child(even) {
    flex-direction: column-reverse;
}
.section {
  padding-top: 3rem;
  background-image: linear-gradient(0deg, #fdfdfe, #f5f7fa);
}
.business__principles {
  font-size: 2rem;
  color: var(--neutralOne);
  margin-bottom: 4rem;
}
.section__header h3 {
  font-weight: 600;
}
p {
  text-align: left;
  font-weight: 500;
  padding-bottom: 0;
  margin-top: 1.5rem;
  border-top: 0.2px solid rgba(201, 200, 200, 0.3);
  padding: 1.5rem;
}
@media screen and (min-width: 768px) {
  .business__principles {
    font-size: 3rem;
    color: var(--neutralOne);
  }
  .section__header {
    margin-top: 10rem;
    margin-bottom: 4rem;
  }
    .business-principles__block:nth-child(even) {
        flex-direction: row;
    }
  .business-principles__block {
    flex-direction: row;
    margin: 0 auto 2rem;
    max-width: 100rem;
    align-items: center;
    justify-content: space-between;
  }
  .business-principles__image {
    width: 50%;
    max-height: 33rem;
    background-image: linear-gradient(0deg, #fdfdfe, #f5f7fa);
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .business-principles__image img {
    max-height: 33rem;
  }
}
@media screen and (max-width: 767px) {
    .business-principles__block h3 {
        line-height: 1.5;
        font-weight: 400;
        font-size: 1.6rem;
    }
}
</style>
