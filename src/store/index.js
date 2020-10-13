import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product
  },
})

