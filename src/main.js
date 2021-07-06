//害得声明依赖，但是这个时候会把jquery也搞进来，我们希望的是使用全局的jquery
// 1.把jquery引入到index.html
// 注意：这里引用文件资源的时候要以dist目录中的路径为准，不能以src中index.html为准
// 2.在配置文件中配置当加载jquery的时候不要打包bundle，你使用全局的jquery
// 3.当你在模块中去使用jquery的时候，还得通过import来引入使用



/* import $ from 'jQuery';
$('#app').css({
	width: 200,
	height: 200,
	backgroundColor: 'pink'
}) */

import Vue from 'vue'
import App from './App.vue'
import router from './routers'

// import './components/main.css'//可以这样引入css文件，并且支持热更新
new Vue({
	el: '#app',
	template: '<App />',
	router,
	components: {
		App
	}
})

/* new Vue({
	template: '<App />',
	components: {
		App
	}
}).$mount('#app') */
