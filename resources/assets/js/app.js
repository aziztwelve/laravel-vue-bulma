require('./bootstrap');

window.Vue = require('vue');

// var Vuef = require('vue');
// window.Vue = Vuef;



//vue router
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);




// Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myheader =  require('./components/Myheader.vue');
let Myfooter =  require('./components/Myfooter.vue');

let Home =  require('./components/Home.vue');
let About =  require('./components/About.vue');


 

//route
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});




const app = new Vue({
    el: '#app',
    router,
    components:{Myheader, Myfooter}
    // created(){
    // 	console.log('hello world')
    // }
});
