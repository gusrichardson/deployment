import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue';
import About from './views/About.vue';

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