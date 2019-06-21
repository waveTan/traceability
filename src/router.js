import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Traceability from './views/Traceability.vue'
import Verification from './views/Verification.vue'
import Feedback from './views/Feedback.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/traceability',
      name: 'traceability',
      component: Traceability
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    }
  ]
})
