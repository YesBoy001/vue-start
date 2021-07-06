import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

// 这里直接默认导出new出来的router实例
export default  new VueRouter({
	routes: [{
			path: '/foo',
			component: Foo
		},
		{
			path: '/bar',
			component: Bar
		}
	]
})
