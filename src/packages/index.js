import Turntable from "./Turntable.vue";

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
 console.log('window 情况');
 window.Vue.use(Turntable) 
}

export default Turntable.install = (Vue) => {
 Vue.component(Turntable.name, Turntable)
}

