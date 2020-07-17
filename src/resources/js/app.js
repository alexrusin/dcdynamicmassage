
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('coupons', require('./components/Coupons.vue').default);
Vue.component('current-year', require('./components/CurrentYear.vue').default);
Vue.component('yelp-reviews', require('./components/YelpReviews.vue').default);

const app = new Vue({
    el: '#app',
});