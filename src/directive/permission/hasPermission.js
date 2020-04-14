/**
 * 操作权限处理
 */
import store from '@/store'

export default {
  inserted(el,binding,vNode){
    const {value} = binding;
    const all_permission = "*:*:*";
    const permissions = store.getters && store.getters.permissions;

    if(value && value instanceof Array && value.length > 0){
      const permissionFlag = value;

      const hasPermissions = permissions.some(permission =>{
        return all_permission === permission || permissionFlag.include(permission);
      })
      if(!hasPermissions){
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('请设置权限标签值')
    }
  }
};
