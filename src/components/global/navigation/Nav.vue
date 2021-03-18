<template>
  <div class="nav" :class="{ 'nav-scrolled': !view.atTopOfPage }">
    <div class="nav-left">
      <div class="nav-logo">
        <a href="#home" v-smooth-scroll="{ duration: 1000, offset: -70 }">
          <img src="@/assets/images/renewabletek-africa-full-logo-mx-sm.png" alt="RenewableTek Africa Logo" />
        </a>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-content">
        <div class="mobile-nav" v-if="isMobile">
          <!-- <img
            v-if="!menuClicked"
            src="@/assets/menu.svg"
            @click="toggleMenu"
            alt="Menu Icon"
          />
          <img
            class="close-button"
            v-else
            src="@/assets/close-button.svg"
            @click="toggleMenu"
            alt="Close Icon"
          /> -->
          <mobile-nav v-if="showMobileNav" @closeMobileNav="closeMobileNav"/>
        </div>
        <div class="nav-web" v-else>
          <web-nav />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IsMobile from "@/mixins/IsMobile";
import WebNav from "./WebNav";
import MobileNav from './MobileNav';

export default {
  name: 'nav',
  mixins: [IsMobile],
  components: {
    WebNav,
    MobileNav,
  },
  data() {
    return {
      showMobileNav: false,
      menuClicked: false,
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    closeMobileNav() {
      this.showMobileNav = false;
      this.menuClicked = false;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
    toggleMenu() {
      this.showMobileNav = !this.showMobileNav;
      this.menuClicked = !this.menuClicked;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  font-weight: 500;
  z-index: 10;
  padding: 2rem 6%;
  background: var(--semanticOne);
}
.nav-logo img {
  height: 6.5rem;
  width: auto;
}
.nav-left,
.nav-right,
.nav-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-left {
  width: 50%;
}
.nav-right {
  justify-content: flex-end;
  width: 50%;
}
.nav-scrolled {
  transition: transform 0.5s;
  box-shadow: 0px 
  0px 10px rgba(0, 0, 0, 0.1);
}
.nav-content {
  width: inherit;
}
@media screen and (max-width: 600px) {
  .nav-content {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
