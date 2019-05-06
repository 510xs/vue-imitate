import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/search',
      name:'search',
      component:() => import('./views/Search.vue')
    },{
      path:'/loginCompent',
      name:'loginCompent',
      component:() => import('./views/LoginCompent.vue')
    },{
      path:'/deliver',
      name:'deliver',
      component:() => import('./views/Deliver.vue')
    },{
      path:'/interview',
      name:'interview',
      component:() => import('./views/Interview.vue')
    },{
      path:'/invite',
      name:'invite',
      component:() => import('./views/Invite.vue')
    },{
      path:'/collect',
      name:'collect',
      component:() => import('./views/Collect.vue')
    },{
      path:'/edit',
      name:'edit',
      component:() => import('./views/Edit.vue')
    },{
      path:'/chooseCity',
      name:'chooseCity',
      component:() => import('./components/ChooseCity.vue')
    },{
      path:'/about/resume',
      name:'resume',
      component:() => import('./views/Resume.vue')
    },{
      path:'/edit/editPosition',
      name:'editposition',
      component:() => import('./components/EditPostion.vue')
    },{
      path:'/edit/editCity',
      name:'editcity',
      component:() => import('./components/EditCity.vue')
    },{
      path:'/edit/editSalary',
      name:'editsalary',
      component:() => import('./components/EditSalary.vue')
    },{
      path:'/edit/editCompany',
      name:'editcompany',
      component:() => import('./components/EditCompany.vue')
    }
  ]
})
