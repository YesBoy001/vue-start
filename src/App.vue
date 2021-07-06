<template>
	<div id="app">
		<h1 class="A1">已经是热更新了，呵呵呵</h1>
		<ul>
			<li><a href="#/foo">foo</a></li>
			<li><a href="#/bar">bar</a></li>
		</ul>
		<router-view></router-view>
		
	</div>
</template>

<script>
	import Foo from './components/Foo.vue'
	export default {
		data (){
			return {
				message:'hello vue'
			}
		},
		components:{
			Foo
		}
		
	}
</script>
<!-- scoped 表示该样式只适用于当前组件，不会影像子组件的样式 -->
<!-- 使用less的时候需要先安装 
https://vue-loader.vuejs.org/zh/guide/pre-processors.html#%E5%85%B1%E4%BA%AB%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F -->
<style scoped lang="less">
	
	div{
		background-color: #888888;
		.A1{
			color: #55ff00;
			background-color: #ffff7f;
		}
	}
</style>
