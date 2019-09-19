import Turntable from "./Turntable.vue";

console.log(Turntable, 'turntable')
Turntable.install = Vue => Vue.component(Turntable.name, Turntable);

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}

export default Turntable;