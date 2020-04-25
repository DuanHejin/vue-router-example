import VueRouter from 'vue-router';
import {
  HelloWorld,
  List,
  Detail,
  DetailGetIdByProps,
  TransitionComponent,
} from './components';

import { isLoggedIn } from './services/AuthService';


const routes = [{
  // path: '/', redirect: '/list'
  path: '/', redirect: {name: 'list'}
}, {
  path: '/list', component: List, name: 'list', alias: '/root'
}, {
  path: '/helloWorld', component: HelloWorld
}, {
  path: '/list/:id', component: Detail
}, {
  path: '/detail/:id', component: Detail, name: 'detail', meta: {requiredAuth: true}
}, {
  path: '/detailGetIdByProps/:objId', component: DetailGetIdByProps, name: 'detailGetIdByProps', props: true
}, {
  path: '/detailGetIdAndObjByProps/:objId', component: DetailGetIdByProps, props: (route) => ({objId: route.params.objId, name: 'detailGetIdAndObjByProps'})
}, {
  path: '/transition', component: TransitionComponent, name: 'transition'
}, {
  path: '*', component: List
}]

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;