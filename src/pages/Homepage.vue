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
          <div class="hero-page__carousel-parent">
            <transition
              mode="out-in"
              enter-active-class="animate__animated animate__fadeIn"
            >
              <div
                class="hero-page__carousel"
                v-if="IsPhone && headerAnimationDone"
              >
                <div class="solar-illustration">
                  <img src="@/assets/images/renewable-project.png" alt="">
                </div>
              </div>
            </transition>
          </div>
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
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInLeftBig"
        >
          <p v-show="headerAnimationDone" class="button-block">
            <a class="s-button" target="_blank">
              Download App
            </a>
          </p>
        </transition>
      </div>
      <div class="hero-page__carousel-parent">
        <!-- <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
        > -->
          <!-- <div
            class="hero-page__carousel"
            v-if="!IsPhone && headerAnimationDone"
          > -->
          <div class="solar-illustration">
            <img src="@/assets/images/renewable-project.png" alt="">
          </div>
          <!-- </div> -->
        <!-- </transition> -->
      </div>
    </div>
  </main>
</template>

<script>
import IsPhone from "@/mixins/IsPhone";
import "animate.css";

export default {
  name: "Home",
  mixins: [IsPhone],
  data() {
    return {
      dataText: "Premier renewable energy consulting firm providing a range of services including:",
      headerAnimationDone: false,
      runanimation: false,
      loadAnimation: false,
    };
  },
  beforeMount() {
    window.addEventListener("DOMContentLoaded", this.domLoaded);
  },
  methods: {
    domLoaded() {
      setTimeout(() => {
        this.loadAnimation = true;
      }, 80);
    },
    typeWriter(text, i) {
      const self = this;
      if (i < text.length) {
        // add next character to h1
        document.querySelector("h2").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          self.typeWriter(text, i + 1);
        }, 80);
      }
      if (i === text.length) {
        this.headerAnimationDone = true;
        setTimeout(() => {
          this.startTextAnimation();
        }, 3000);
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
  padding: 3rem 0;
}
.hero-page__brief li::before {
  content: '-';
  translate: 0.3s;
  margin-right: 5px;
}
.hero-page-brief__text {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
}
.hero-page-brief__text:first-child {
  margin-bottom: 1rem;
}
.s-button {
  line-height: 1.7;
}
.hero-page-brief__text span {
  min-width: 6rem;
  display: inline-block;
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
.hero-page__carousel__image img {
  z-index: 5;
  height: 40rem;
  border-radius: 6px;
  border: 1px solid rgb(0 0 0 / 8%);
}
.button-block {
  margin-top: 2rem;
}
@media screen and (min-width: 768px) {
  .hero-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 9rem;
    min-height: 50rem;
    padding-bottom: 5rem;
  }
  .hero-page__carousel-parent {
    width: 50%;
  }
  .hero-page__brief {
    padding: 1rem 0;
    font-size: 2.5rem;
    box-shadow: 0px 1px 6px rgb(0 0 0 / 2%);
    border-radius: 10px;
  }
  .hero-page__textbox {
    color: black;
    max-width: 40%;
    margin-bottom: 4rem;
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
  .hero-page__carousel {
    max-width: 30rem;
  }
}
</style>
