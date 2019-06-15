import Vue from '../node_modules/vue/dist/vue'
import VueRouter from 'vue-router'
// import account from './main/Account.vue'
// import goodlist from './main/Goodlist.vue'
// import login from './subcom/login.vue'
// import register from './subcom/register.vue'

// import Fenye from './components/FenYe.vue'
Vue.use(VueRouter)


var router = new VueRouter({
    // routes: [{
    //         path: '/account',
    //         component: account,
    //         children: [
    //             { path: 'login', component: login },
    //             { path: 'register', component: register }
    //         ]
    //     },
    //     { path: '/goodlist', component: goodlist }
    // ]
    // routes: [
    //     { path: '/fenye', component: Fenye }
    // ]
})

export default router