

// import App from './App';

import Vue from 'vue'
// import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';

import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue ({
  router,
  render: h => h (App),
	// template: `<div>???</div>`
}).
$mount('#app')
