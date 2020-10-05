import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import goodsList from '@/page/goodsList.vue'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'defaultPage',
    // 默认到首页，将默认的模板进行重定向
    redirect: '/index',
    component: defaultPage,
    // 嵌套路由
    children: [{
        // 首页
        path: '/index',
        name: 'index',
        component: Index
      },
      // 切换城市
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },
      // 商品列表
      {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }
    ]
  }, {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [{
        // 登录
        path: 'login',
        name: 'login',
        component: Login
      }, {
        // 注册
        path: 'register',
        name: 'register',
        component: Register
      }

    ]
  }, ]
})
