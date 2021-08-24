import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import EP from '@/components/Export'
import EP2 from '@/components/Export2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/EP',
      name: 'EP',
      component: EP
    },
    {
      path: '/EP2',
      name: 'EP2',
      component: EP2
    }
  ]
})
