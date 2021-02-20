<template>
  <main>
      <div class="section-container">
        <header class="section__header">
            <h2>
                These four principles govern the way we do business:
            </h2>
        </header>
        <section class="business__principles">
            <div class="business-principles__textbox"></div>
            <div class="business-principles__textbox"></div>
            <div class="business-principles__textbox"></div>
            <div class="business-principles__textbox"></div>
        </section>
      </div>
  </main>
</template>

<script>
export default {
  name: "way-of-business",
};
</script>

<style scoped>
    .business__principles {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .business-principles__textbox {
        width: 20%;
        border-radius: 10px;
        height: 20rem;
        background: var(--accentTwo);
    }
</style>
