import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import GwButton from './button';
import GwFormBulder from './form';

Vue.use(ElementUI);

const components = [
  GwButton,
  GwFormBulder
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  GwButton,
  GwFormBulder
};
