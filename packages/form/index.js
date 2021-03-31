import GwFormBuilder from './src/form';

/* istanbul ignore next */
GwFormBuilder.install = function(Vue) {
  Vue.component(GwFormBuilder.name, GwFormBuilder);
};

export default GwFormBuilder;
