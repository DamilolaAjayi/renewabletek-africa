<template>
  <footer class="footer footer-bg" id="footer">
    <section class="footer__main">
      <div class="footer__column">
        <img
          class="logo"
          src="@/assets/images/renewabletek-africa-monochrome-full-logo-lg.png"
          alt="RenewableTek Africa logo"
        />
        <section class="footer__copyright">
          <p>&#169; {{ currentYear }} RenewableTek Africa | All Rights Reserved</p>
        </section>
      </div>
      <div class="footer__column second">
        <p class="footer-about__header">COMPANY</p>
        <ul>
          <li>
            <router-link :to="{name: 'About'}" :class="'web-nav-link'">About</router-link>
          </li>
          <li>
            <a href=""> Press &amp; Media </a>
          </li>
        </ul>
      </div>
      <div class="footer__column second">
        <p class="footer-contact__header">CONTACT US</p>
        <div class="footer-contact__email">
          <span>
            <img src="@/assets/images/email-icon.png" alt="">
          </span>
          <a
            target="_blank"
            :href="`mailto:info@renewabletekafrica.com`"
            >
            info@renewabletekafrica.com
          </a>
        </div>
        <div class="footer-contact__mobile">
          <span>
            <img src="@/assets/images/phone-icon.png" alt="">
          </span>
          <a href="tel:+234-901-474-5515"
            >
            +234 816 967 9594
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'el-footer',
  computed: {
    currentYear() {
      const date = new Date;
      return date.getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 3rem 2rem 6rem;
}
.footer__main {
  padding-bottom: 1.5rem;
}
.footer-bg {
  width: 100%;
  background: var(--neutralOne);
  color: var(--semanticOne);
}
.footer__copyright p {
  font-size: 1.2rem;
}
.footer__column {
  text-align: left;
  padding: 2rem 0;
}
.footer__column:nth-child(n + 1) {
  margin-top: 1rem;
}
.footer-contact__header {
  margin-bottom: 1rem;
  font-weight: 600;
}
.footer-about__header {
  font-weight: 600;
  margin-bottom: 1rem;
}
.footer__column li {
  padding: 0.5rem 0;
}
.logo {
  height: 6.5rem;
  width: auto;
}
a {
  display: block;
  font-weight: 300;
}
a:hover {
  color: var(--primaryOne);
}
.second img {
  width: 2rem;
  filter: invert(90%) sepia(16%) saturate(1927%) hue-rotate(321deg) brightness(101%) contrast(101%);
}
@media screen and (min-width: 768px) {
  .logo {
    height: 9rem;
    width: auto;
    margin-bottom: 2rem;
  }
  .footer {
    padding: 8rem 1.5rem;
    text-align: center;
  }
  .footer__main {
    padding: 0 6% 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .second {
    padding-top: 4rem;
  }
}

.footer-contact__email,
.footer-contact__mobile {
  margin-top: 1rem;
  display: flex;
}
.footer-contact__email span,
.footer-contact__mobile span {
  margin-right: 1rem;
}
@media screen and (max-width: 767px) {
  .footer__main {
    flex-direction: column;
  }
  .footer__press,
  .footer__contact {
    max-width: 30rem;
    margin-left: 0;
    width: auto;
    margin: 1.2rem 0;
  }
  a {
    font-size: 1.5rem;
  }
}
</style>
