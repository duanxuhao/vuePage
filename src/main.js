//如何在webpack构建的项目中使用vue进行开发
import Vue from 'vue'

import app from './App.vue'


import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

var vm = new Vue({
    el: "#app",
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // }
    render: function(createElement) { //在webpack中如果想通过vue把一个组建放在页面中去展示，vm中的实例render函数可以实现，另外在配置文件中需要导入VueLoaderPlugin = require('vue-loader/lib/plugin')
        return createElement(app)
    },
    router
})