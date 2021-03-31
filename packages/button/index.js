import GwButton from './src/button';

/* istanbul ignore next */
GwButton.install = function(Vue) {
  Vue.component(GwButton.name, GwButton);
};

export default GwButton;
