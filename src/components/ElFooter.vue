<template>
  <footer class="footer footer-bg" id="footer">
    <section class="footer__main">
      <div class="footer__column">
        <img
          class="logo"
          src="@/assets/images/renewabletek-africa-monochrome-full-logo-lg.png"
          alt="RenewableTek Africa logo"
        />
      </div>
      <div class="footer__column">
        <p class="footer-about__header">COMPANY</p>
        <ul>
          <li>Careers</li>
          <li>About</li>
          <li>Press &amp; Media</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="footer__column">
        <p class="footer-contact__header">CONTACT US</p>
        <a
          target="_blank"
          :href="`mailto:info@spaces.io`"
          class="footer-contact__email"
          >info@renewabletek.africa</a
        >
        <a href="tel:+234-901-474-5515" class="footer-contact__mobile"
          >+234 xxx xxx xxxx</a
        >
      </div>
    </section>
    <section class="footer__copyright">
      <p>&#169; {{ currentYear }} RenewableTek Africa | All Rights Reserved</p>
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
  padding: 8rem 1.5rem;
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
}
.footer__column:nth-child(n + 1) {
  margin-top: 1rem;
}
.footer-contact__header {
  margin-bottom: 1rem;
  font-weight: 700;
}
.footer-about__header {
  font-weight: 700;
}
.logo {
  height: 9rem;
  width: auto;
}
a {
  display: block;
}
a:hover {
  color: var(--primaryOne);
}
@media screen and (min-width: 768px) {
  .logo {
    height: 9rem;
    width: auto;
  }
  .footer {
    text-align: center;
  }
  .footer__main {
    padding: 0 6% 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}

.footer-contact__email,
.footer-contact__mobile {
  margin-top: 1rem;
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
    font-weight: 400;
  }
}
</style>
