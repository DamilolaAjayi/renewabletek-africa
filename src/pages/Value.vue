<template>
  <section class="section">
      <div class="section-container">
        <header class="section__header">
            <h3>
                These four principles govern the way we do business:
            </h3>
        </header>
        <section class="business__principles">
            <div class="company-portfolio">
            <div class="company-portfolio__card">
                <img src="@/assets/images/value/value-chain.svg" alt="performance icon">
                <p>
                    Distinctive value creation
                </p>
            </div>
            <div class="company-portfolio__card">
                <img src="@/assets/images/value/satisfaction.svg" alt="performance icon">
                <p>
                    Priority on customer success
                </p>
            </div>
            <div class="company-portfolio__card">
                <img src="@/assets/images/value/excellence.svg" alt="distribution icon">
                <p>
                    Excellence in every project
                </p>
            </div>
            <div class="company-portfolio__card">
                <img src="@/assets/images/value/promotion.svg" alt="employee development icon">
                <p>
                    Continuous employee development
                </p>
            </div>
            </div>
        </section>
      </div>
  </section>
</template>

<script>
export default {
  name: 'value',
};
</script>

<style scoped>
    .section {
        padding-top: 3rem;
        background-image: linear-gradient(
        0deg
        ,#fdfdfe,#f5f7fa);
    }
    .business__principles {
        font-size: 2rem;
        color: var(--neutralOne);
        margin-bottom: 4rem;
    }
    .section__header {
        margin-bottom: 4rem;
    }
    .section__header h3 {
        font-weight: 600;
    }
    .company-portfolio__card {
        overflow: hidden;
        padding: 3rem 0 2rem;
        width: 25rem;
        margin: 0 auto;
        text-align: center;
        z-index: 9;
        background: var(--semanticOne);
        box-shadow: 0px 1px 6px rgb(0 0 0 / 8%);
        border-radius: 6px;
        margin-bottom: 2rem;
    }
    .company-portfolio__card img {
        width: 10rem;
        border-radius: 4px;
        filter: drop-shadow(0 0 0.4rem #c9c8c8);
    }
    .company-portfolio__card h4 {
        text-align: left;
        margin-top: 2rem;
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
        .section {
            height: 90vh;
        }
        .business__principles {
            font-size: 3rem;
            color: var(--neutralOne);
        }
        .section__header {     
            margin-top: 10rem;
            margin-bottom: 4rem;
        }
        .company-portfolio {
            display: flex;
            justify-content: space-between;
            margin: 6rem auto 0;
        }
    }
    @media screen and (max-width: 767px) {
        .company-about__header img {
            width: 23rem;
        }
    }
</style>
