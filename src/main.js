
import Vue from 'vue'
import App from './App.vue'
// configaration for bootstrap and vue bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Router from "../routes";

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// configaration for bootstrap and vue bootstrap

// var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);



new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})


// import { routes } from './routes';
// const router = new VueRouter({
//   routes
// });



export const eventBus = new Vue({
  methods: {
    changeAge(age){
       this.$emit('ageWasEdited', age);
    }
  }
  
  }); 

// {
//   // GET /someUrl
//   this.$http.get('http://e-commerce-view-project.test/api/users').then(response => {

//     // get body data
//     this.someData = response.body;

//   }, response => {
//     // error callback

// }

// Client ID: 2
// Client secret: V73CtmuUVqA9qawkRyGKyV3PFarjiZTXDD2Ga5Fp

 new Vue({

  http: {
    root: 'http://e-commerce-view-project.test',
    headers: {
      Authorization: 'Bearer YXBpOnBhc3N3b3Jk'
    }
  }

})


