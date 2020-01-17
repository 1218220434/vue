import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Mock from 'mockjs'
import router from './router'
import {
    Button,
    Icon,

} from 'element-ui';
Vue.use(Button).use(Icon);
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
    // 挂载
Vue.prototype.$mock = Mock.mock;
Axios.defaults.baseURL = 'http://192.168.110.65:8090';
Vue.prototype.$axios = Axios;
Vue.prototype.globalData = {}

Axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    console.log(config)
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

Axios.interceptors.response.use(res => {
    // 在发送请求之前做些什么
    console.log(res)
    return res;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});


new Vue({
    // 注册理由
    router,
    render: h => h(App),
}).$mount('#app')