import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
    meta: {
      index: 0,
      title: "首页"
    }
  },
  {
    path: '/home',
    redirect: { name: 'home' },
    component: () => import('@/views/home.vue'),
    meta: {
      index: 0,
      keepAlive: false,
      title: "首页"
    }
  },
  {
    path: '/cell',
    name: 'cell',
    component: () => import(/* webpackChunkName: "home" */ '@/views/cell.vue'),
    meta: {
      index: 1,
      keepAlive: false,
      title: "cell"
    }
  },
  {
    path: '/image',
    name: 'image',
    component: () => import(/* webpackPrefetch: true */ '@/views/image.vue'), // 入口预加载
    meta: {
      index: 0,
      keepAlive: false,
      title: "image"
    }
  },
  {
    path: '/row',
    name: 'row',
    component: () => import('@/views/row.vue'),
    meta: {
      index: 1,
      keepAlive: false,
      title: "row"
    }
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/toast.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('@/views/popup.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/dialog.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/overlay',
    name: 'overlay',
    component: () => import('@/views/overlay.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/icon.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/views/loading.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('@/views/radio.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/checkboxgroup',
    name: 'checkboxgroup',
    component: () => import('@/views/checkboxgroup.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('@/views/switch.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/totop',
    name: 'totop',
    component: () => import('@/views/totop.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('@/views/field.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/popup_picker',
    name: 'popup_picker',
    component: () => import('@/views/popup_picker.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/popup_datetime',
    name: 'popup_datetime',
    component: () => import('@/views/popup_datetime.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/keyboard_car',
    name: 'keyboard_car',
    component: () => import('@/views/keyboard_car.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('@/views/picker.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('@/views/badge.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/tab.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: () => import('@/views/stepper.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },

]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //切换路由，取消上个页面所有请求
  window.__axiosPromiseArr.forEach((ele, index) => {
    ele.cancel()
    window.__axiosPromiseArr.shift()
  })
  document.title = to.meta.title || "车内大健康"
  next()
})


export default router
