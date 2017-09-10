import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/store'
import Layout from '../components/layout/Layout'
import Login from '../components/Login'
// import GridView from '../components/layout/PageBar'

import page from '../components/page/page'
import AccountProfile from '../views/profile/Account'
// const GridView = () => import('@/components/grid/FilterGrid.vue')

import GM from '../geemeta.js'

Vue.use(VueRouter)

// router.beforeEach((to, from, next) => {
//   // if ((to.path !== '/login.html') && (!sessionStorage.getItem('accessToken') || sessionStorage.getItem('accessToken') === 'undefined')) {
//   //   next({
//   //     path: '/login.html'
// // query: { redirect: to.fullPath }
// //     })
// //   } else { next() }
//
// //   $.ajax({
// //     url: GM.ctx.url.root + 'api/sys/auth/isLogged',
// //     success: function (data) {
// //       GM.ctx.profile = data.user // kendo.observable(data.user);
// //   //        GM.ctx.sysConfig = arrayToObject(data.sysConfig, 'code');
// //  //        GM.ctx.userConfig = arrayToObject(data.userConfig, 'code');
// //       // 如果登录之后检查isLogged为false，可能是未设置好跨域登陆--user-data-dir=XXX
// //       if (data.user && data.user.id) {
// //         GM.ctx.profile.isLogged = true
// //       } else {
// //         GM.showMsg('showMsg')
// //         GM.ctx.profile = {isLogged: false}
// //         var reloadURL = 'login.html' + window.location.search
// //         window.location.replace(reloadURL, true)
// //       }
// //     },
// //     error: function (data) {
// //       console.debug('login fail>', data)
// //       GM.showMsg('未登录...可能服务地址不正确或服务未启动。')
// //     }
// //   })
// })
// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

let routes = [
  {
    path: '/',
    redirect: '/m/'
  },
  {
    path: '/m/',
    component: Layout,
    meta: {
      requireAuth: true
    },
    children: [
      {path: 'page/:moduleName/:pageCode', component: page},
      {path: 'profile/account', component: AccountProfile},
      {path: 'designer', component: require('../views/geemeta/gm-desinger/editor.vue')},
      {path: 'preview/:code', component: require('../views/geemeta/gm-desinger/preview.vue')},
      {path: 'meta', component: require('../views/geemeta/gm-meta/index.vue')}
    ]
  },
  {
    path: '/login', component: Login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // alert('router.beforeEach')
  // console.debug('to', to)
  // console.debug('from', from)
  // console.debug('next', next)
  console.debug('GM.profile().user', GM.profile().user)
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (GM.profile().user) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
