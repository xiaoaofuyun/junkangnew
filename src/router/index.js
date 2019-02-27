import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Issued from '@/components/Issued'
import Notice from '@/components/Notice'
import Industry from '@/components/Industry'
import Industryul from '@/components/Industryul'
import Industrypage from '@/components/Industrypage'
import Issuedetail from '@/components/Issuedetail'
import Noticedetail from '@/components/Noticedetail'
import Issuehead from '@/components/Issuehead'
import Noticehead from '@/components/Noticehead'
import Supervise from '@/components/Supervise'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path:'/supervise',
          name:'supervise',
          component:Supervise
        },
        {
          path: '/issued',
          name: 'issued',
          component: Issued
        },
        {
          path: '/notice',
          name: 'notice',
          component: Notice
        },
        {
          path: '/noticehead',
          name: 'Noticehead',
          component: Noticehead,
          children:[
            {
              path: '/noticedetail',
              name: 'noticedetail',
              component: Noticedetail
            }
          ]
        },
        {
          path: '/issuehead',
          name: 'Issuehead',
          component: Issuehead,
          children:[
              {
                path: '/issuedetail',
                name: 'issuedetail',
                component: Issuedetail
              }
          ]
        },
        {
          path: '/industry',
          name: 'industry',
          component: Industry,
          children: [
            {
              path: '/industryul',
              name: 'industryul',
              component: Industryul
            },
            {
              path: '/industrypage',
              name: 'industrypage',
              component: Industrypage
            }

          ]
        },
      ]
    }

  ]
})
// 登录拦截功能
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects
//   console.log(to)
//   let localStorageJun = localStorage.getItem('junkang')
//   if (to.path === '/login' || localStorageJun) {
//     next()
//   } else {
//     // next('/login')
//   }
// })
export default router
