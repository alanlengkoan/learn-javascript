import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faToggleOff, faToggleOn, faUserSecret, faLaptopCode, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'   
import devicon  from 'devicon'

// begin:: assets
import './assets/app.css'
// end:: assets

library.add(faToggleOff, faToggleOn, faUserSecret, faLaptopCode, faGithub, faFileArrowDown, faInstagram, faTwitter, faFacebook, faWhatsapp, faLinkedin)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')