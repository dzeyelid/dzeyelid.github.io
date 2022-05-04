import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faLink, faAngleRight, faTwitter, faGithub, faYoutube)

// Register the component globally
// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('font-awesome-icon', FontAwesomeIcon)
