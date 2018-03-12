import Vue from 'vue'
import App from './App'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';
import { ActionSheet } from 'vue-ydui/dist/lib.rem/actionsheet';
/* 使用px：import {ActionSheet} from 'vue-ydui/dist/lib.px/actionsheet'; */
import { Input } from 'vue-ydui/dist/lib.rem/input';
/* 使用px：import {Input} from 'vue-ydui/dist/lib.px/input'; */

Vue.component(Input.name, Input);
Vue.component(ActionSheet.name, ActionSheet);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.use(YDUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
export default {
    // 这个字段走 app.json
    config: {
        pages: ['pages/logs/logs', 'pages/index/index', '^pages/login/login'], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }
}