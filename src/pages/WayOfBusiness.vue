<template>
    <main>
        <div class="section-container">
          <header class="section__header">
              <h2>
                  These four principles govern the way we do business:
              </h2>
          </header>
          <section class="business__principles">
              <div class="business-principles__textbox">
                  <h4>
                      Distinctive value creation
                  </h4>
              </div>
              <div class="business-principles__textbox">
                  <h4>
                      Priority on customer success
                  </h4>
              </div>
              <div class="business-principles__textbox">
                  <h4>
                      Excellence in every project
                  </h4>
              </div>
              <div class="business-principles__textbox">
                  <h4>
                      Continuous employee development
                  </h4>
              </div>
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
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
      }
      .business-principles__textbox {
          width: 20%;
          border-radius: 10px;
          height: 25rem;
          background: var(--neutralTwo);
      }
  </style>
  