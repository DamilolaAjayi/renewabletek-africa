<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-logo">
        <a href="#homepage" @click="directToHomepage">
          <img src="@/assets/images/renewabletek-africa-full-logo-mx-sm.png" alt="RenewableTek Africa Logo" />
        </a>
      </div>
    </div>
    <div class="nav-right" v-if="view !== '/about'">
      <div class="nav-content">
        <div class="mobile-nav" v-if="isMobile">
          <img
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
          />
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
    };
  },
  computed: {
    view() {
      return this.$route.path;
    }
  },
  methods: {
    closeMobileNav() {
      this.showMobileNav = false;
      this.menuClicked = false;
    },
    toggleMenu() {
      this.showMobileNav = !this.showMobileNav;
      this.menuClicked = !this.menuClicked;
    },
    directToHomepage() {
      this.$router.push({
        name: 'Home',
      });
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
  background: rgba(255,255,255,0.95);
}
.nav-logo img {
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
