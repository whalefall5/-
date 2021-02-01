import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import AV from 'leancloud-storage';
var { Query, User } = AV;
AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });
Vue.use(VueResource)
Vue.use(ElementUI);
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString(16).slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.width="1260px";
    }else if(binding=='narrow'){
      el.style.width="560px";
    }
  }
})
Vue.filter('sinppt',function(value){
  if(value.length>100){
    return value.slice(0,100) + "...";
  }
  else{
    return value;
  }
})

=======

Vue.config.productionTip = false
>>>>>>> 88e11add22a0a7ca5cd86d4a14f6381e13ba5b98

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
