import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './css/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faUser, faEnvelope, faRightToBracket, faLock, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons'
// Add desired icons to the library
library.add(faSignInAlt, faUser, faEnvelope, faRightToBracket, faLock, faBell, faBars, faXmark);

// Create the Vue application instance
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the application
app.mount('#app');
