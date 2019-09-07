import Vue from 'vue'
import Router from 'vue-router'
import Sheet from './views/Sheet.vue'
import Splash from './views/Splash.vue'
import DefaultLayout from './views/DefaultLayout.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/main',
      name: '',
      component: DefaultLayout,
      children: [ 
        {
          path: '/main',
          name: 'main',
          component: () => import(/* webpackChunkName: "main" */ './views/Main.vue')
        }
      ]
      },
      {
        path: '/details/:id',
        name: 'details',
        component: Details
      },
      {
        path: '/sheet',
        name: 'sheet',
        component: Sheet
      }
     
    
  ]
})
