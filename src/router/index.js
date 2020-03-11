import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '../components/footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import("../views/home/index.vue"),
      footer:Footer
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: () => import("../views/kind/index.vue"),
      footer:Footer
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import("../views/cart/index.vue"),
      footer:Footer
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import("../views/user/index.vue"),
      footer:Footer
    }
  },
  {
    path: '/detail/:proid',
    name: 'detail',
    components: {
      default: () => import("../views/detail/index.vue")
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
