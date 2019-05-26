import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Authors from './views/Authors.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Authors',
    name: 'Authors',
    component: Authors
  }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')