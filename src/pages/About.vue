<template>
  <div>
    <navigation />
    <main>
      <div class="company--profile">
        <section class="company--profile--about">
          <p class="company--profile--about__header">About us</p>
          <p class="company--profile--about__paragraph">
            RenewableTek Africa is the premier renewable energy consulting firm
            providing a range of services including; engineering, procurement,
            construction, maintenance, training and development of renewable
            energy assets across sub-saharan Africa. We partner with our clients
            to support the safe and efficient production, delivery and use of
            renewable energy. RenewableTek is committed to providing clean and
            sustainable solutions that will close the power gap that exists
            within sub-saharan Africa.
          </p>
        </section>
        <section class="company--profile--values">
          <p class="company--profile--values__header">Who we are</p>
          <p class="company--profile--values__paragraph">
            The firm is led by a versatile group of individuals with deep
            experience in renewable energy and emerging markets. Our combined
            experience covers major sectors across the globe with large Fortune
            500 companies as well as medium sized organizations. We seek to
            foster a positive and innovative culture which we carry into our
            projects and give our clients powerful solutions.
          </p>
        </section>
      </div>
    </main>
    <el-footer />
  </div>
</template>

<script>
import Navigation from '@/components/global/navigation/Nav';
import ElFooter from '@/components/ElFooter';

export default {
  name: 'about',
  components: {
    Navigation,
    ElFooter,
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
}
@media screen and (max-width: 767px) {
    .company--profile {
        margin: 14rem 2rem 0;
    }
}
.company--profile--about__header {
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 600;
    margin: 2.1em 0 0.4em 0;
}
@media screen and (max-width: 767px) {
    .company--profile--about__header {
        font-size: 1.4rem;
    }
}
.company--profile--about__paragraph {
    text-align: justify;
    margin: 0 0 2em 0;
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 300;
}
@media screen and (max-width: 767px) {
    .company--profile--about__paragraph {
        font-size: 1.2rem;
    }
}
.company--profile--values__header {
    margin: 0 0 0.4em 0;
    line-height: 1.2;
    font-weight: 600;
    font-size: 2rem;
}
@media screen and (max-width: 767px) {
    .company--profile--values__header {
        font-size: 1.4rem;
    }
}
.company--profile--values__paragraph {
    margin: 0 0 2em 0;
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 300;
}
@media screen and (max-width: 767px) {
    .company--profile--values__paragraph {
        font-size: 1.2rem;
    }
}
@media screen and (min-width: 768px) {
 .company--profile {
    font-weight: 300;
    margin-left: 8%;
    width: 70%;
    margin-top: 14rem;
  } 
}
</style>
