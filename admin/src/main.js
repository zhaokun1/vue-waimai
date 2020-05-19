// 引入vue
import Vue from 'vue';
// 引入APP
import App from '@/App';
// 引入router
import router from '@/router';
// 引入store
import store from '@/store';
// 引入axios
import axios from 'axios';
// 引入ei
import ElementUI from 'element-ui';
// 引入quill-editor
import VueQillEditor from 'vue-quill-editor';

// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// 安装
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueQillEditor);


// 注册Vue
new Vue({
    // 注册router
    router,
    // 注册store
    store,
    // 渲染
    render: h => h(App)
    // 上树
}).$mount('#app')