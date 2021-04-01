<template>
  <footer class="footer footer-bg" id="footer">
    <div class="footer__press">
      <img
        class="logo"
        src="@/assets/images/renewabletek-africa-monochrome-full-logo-lg.png"
        alt="RenewableTek Africa logo"
      />
      <section>
        <h4>In the press</h4>
        <div class="footer__media">
          <a target="_blank" href="#">
              <img src="https://ik.imagekit.io/7dkc9ii1v1r/ventures_africa_logo-min_-0rBXx2htOR7.png" alt="Merchlist featured in Ventures Africa">
          </a>
          <a target="_blank" href="#">
              <img src="https://ik.imagekit.io/7dkc9ii1v1r/tech_crunch_logo-min_bNxNkREG0.png" alt="Rensource featured in Tech Crunch" class="tech-crunch">
          </a>
        </div>
      </section>
    </div>
    <div class="footer__contact">
      <h4 class="footer-contact__header">Contact:</h4>
      <a target="_blank" :href="`mailto:info@spaces.io`" class="footer-contact__email">info@renewabletek.africa</a>
      <a href="tel:+234-901-474-5515" class="footer-contact__mobile">+234 xxx xxx xxxx</a> 
    </div>
  </footer>
</template>

<script>
export default {
    name: 'el-footer',
};
</script>

<style scoped>
.footer-bg {
  width: 100%;
  background: var(--neutralOne);
  color: var(--semanticOne);
}
.s-button {
  box-shadow: 0px 1px 3px rgba(44, 39, 56, 0.08), 0px 1px 3px rgba(44, 39, 56, 0.08);
  width: 12rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 4rem;
  background: var(--primaryOne);
  display: block;
  margin-left: -5px;
}
section {
  margin-top: 1rem;
}
section h4 {
  color: var(--semanticOne);
  padding-top: 2rem;
  font-size: 2rem;
}
.footer {
  padding: 3rem 6% 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
a {
  display: block;
}
a:hover {
  color: var(--primaryOne);
}
.footer-contact__header {
  margin-bottom: 1rem;
}
.footer__press {
  width: 30%;
  text-align: left;
}
.footer__media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11rem;
  margin-top: 1rem;
}
.footer__media img {
  width: 5rem;
  opacity: 0.8;
}
.footer__contact {
  text-align: left;
  width: 20%;
}
.footer-press__spaces-logo {
  width: 22rem;
  margin-top: -10px;
  margin-left: -10px;
}
@media screen and (max-width: 992px) {
  .container {
    padding: 4rem 3rem;
  }
}
.logo {
  height: 6.5rem;
  width: auto;
}
.footer-contact__email, .footer-contact__mobile {
  margin-top: 1rem;
}
@media screen and (max-width: 767px) {
  .footer {
    flex-direction: column;
  }
  .footer__press, .footer__contact {
    max-width: 30rem;
    margin-left: 0;
    width: auto;
    margin: 1.2rem 0;
  }
  .footer-press__spaces-logo {
    width: 14rem;
  }
  a {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .app-link svg {
      width: 12.75px;
      height: 1.5rem;
  }
}
</style>
