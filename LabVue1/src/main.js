import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

createApp(App).mount('#app')
createNavBar(NavBar).mount('#navbar')
createFooter(Footer).mount('#footer')
