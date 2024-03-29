import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/');
  } else {
    next();
  }
});

export default router;
