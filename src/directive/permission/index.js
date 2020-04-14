import hasRole from "@/directive/permission/hasRole";
import hasPermission from "@/directive/permission/hasPermission";
import {Vue} from "vue/types/vue";

const install = function (Vue) {
  Vue.directive('hasRole',hasRole);
  Vue.directive('hasPermission',hasPermission);
};
if(window.Vue){
  window['hasRole'] = hasRole;
  window['hasPermission'] = hasPermission;
  Vue.use(install);// eslint-disable-line
}
export default install
