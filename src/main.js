import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' //a modern alternative to CSS resets
import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' //global css
import '@/assets/styles/maple.scss' //custom css
import App from './App'
import store from './store'
import router from '@/router/routers'

import './assets/icons' //icon
import '@/router' //permission controlnpm audit
import permission from './directive/permission'

import './assets/icons' // icon
import '@/router' // permission control
import {getDicts} from "@/api/system/dict/data";
import {getConfigKey} from "@/api/system/config";
import {parseTime, resetForm, addDateRange, selectDictLabel} from "@/utils/dimple";
import Pagination from "@/components/Pagination";

//全局方法挂载
Vue.prototype.getDicts = getDicts;
Vue.prototype.getConfigKey = getConfigKey;
Vue.prototype.parseTime = parseTime;
Vue.prototype.resetForm = resetForm;
Vue.prototype.addDateRange = addDateRange;
Vue.prototype.selectDictLabel = selectDictLabel;

Vue.prototype.msgSuccess = function (msg) {
  this.$message({showClose: true, message: msg, type: "success"});
};

Vue.prototype.msgError = function (msg) {
  this.$message({showClose: true, message: msg, type: "error"});
};

Vue.prototype.msgWarning = function (msg) {
  this.$message({showClose: true, message: msg, type: "warning"});
};


Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
};

// 全局组件挂载
Vue.component('Pagination', Pagination);

Vue.use(permission);

Vue.use(Element,{
  size: Cookies.get('size') || 'medium' //set element-ui default size
});

Vue.config.productionTip = false;


new Vue({
   el: '#app',
  router,
  store,
  render: h => h(App)
});
