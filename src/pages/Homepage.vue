<template>
  <main id="home">
    <div
      class="hero-page section-container"
    >
      <div class="hero-page__textbox">
        <div>
          <h2>
            Premier renewable energy consulting firm providing a range of services including:
          </h2>
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
                <li>Development of renewable energy assets across sub-saharan Africa</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="hero-page__carousel-parent">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
        >
          <div
            class="hero-page__carousel"
            v-if="loadAnimation"
          >
            <div class="solar-illustration">
              <img src="@/assets/images/renewable-project.png" alt="">
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="homepage__footer">
      <p>
        We partner with our clients to support the 
        <span class="hightlight">safe and efficient production</span>,
        <span class="hightlight">delivery</span>,&nbsp;and&nbsp;
        <span class="hightlight">use of renewable energy</span>.
      </p>
    </div>
  </main>
</template>

<script>
import 'animate.css';

export default {
  name: 'Home',
  data() {
    return {
      dataText: 'Premier renewable energy consulting firm providing a range of services including:',
      headerAnimationDone: false,
      runanimation: false,
      loadAnimation: false,
    };
  },
  beforeMount() {
    window.addEventListener('DOMContentLoaded', this.domLoaded);
  },
  methods: {
    domLoaded() {
      this.startTextAnimation();
    },
    typeWriter(text, i) {
      const self = this;
      if (i < text.length) {
        // add next character to h1
        document.querySelector('h2').innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          self.typeWriter(text, i + 1);
        }, 60);
      }
      if (i === text.length) {
        this.headerAnimationDone = true;
        this.loadAnimation = true;
      }
    },
    startTextAnimation() {
      // text exists! start typewriter animation
      this.typeWriter(this.dataText, 0);
    },
  },
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
  content: '-';
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
  margin-top: 10rem;
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
  box-shadow: 5px 
  0px 5px rgba(0, 0, 0, 0.1);
}
.homepage__footer p {
  font-weight: 500;
  font-size: 2.5rem;
}
@media screen and (min-width: 768px) {
  .hero-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12rem;
    min-height: 50rem;
    padding-bottom: 0;
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
  main {
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
