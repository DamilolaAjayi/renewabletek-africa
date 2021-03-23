<template>
  <main>
      <div class="section-container">
        <header class="section__header">
            <h3>
                These four principles govern the way we do business:
            </h3>
        </header>
        <section class="business__principles">
            <ul>
                <li class="business-principles__item">Distinctive value creation</li>
                <li class="business-principles__item">Priority on customer success</li>
                <li class="business-principles__item">Excellence in every project</li>
                <li class="business-principles__item">Continuous employee development</li>
            </ul>
        </section>
      </div>
  </main>
</template>

<script>
export default {
  name: 'value',
};
</script>

<style scoped>
    .business__principles {
        font-size: 2rem;
        color: var(--neutralOne);
        margin-bottom: 4rem;
    }
    .section__header {     
        margin-top: 10rem;
        margin-bottom: 4rem;
    }
    .business-principles__item:before {
        content: '-';
        translate: 0.3s;
        margin-right: 5px;
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
    }
</style>
