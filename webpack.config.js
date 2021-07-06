var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack')
module.exports = {
	mode: 'development',
	// entry: './src/main.js',
	entry: ['babel-polyfill', './src/main.js'],
	// 配置webpack-dev-server
	devServer: {
		/* 	// 配置webpack-dev-server的www目录
			// 浏览器真正运行查看的是打包之后的结果
			// webpack-dev-server为了提高打包效率，它把文件存储在了内存中，你看不见
			// 这里你只是在高数webpack-dev-server让你的打包结果运行在虚拟目录dist中
			// 那这个时候你的打包结果中的index.html去加载资源的时候确实需要相对于dist来找
			// 
			contentBase:'./',
			proxy:{
				"/api": "http://localhost:3000"
			} */
		// ./dist/ 将dist目录作为www的根目录,index.html中引用的第三方包的路径需要改变
		// ./的话（开发阶段使用），webpack-dev-server就会直接把资源打包到项目根目录下，但注意：你看不见它
		// 那这个时候你在index.html文件中请求的资源就是相对于demo5根目录，index.html中引用的第三方包的路径不需要改变
		contentBase: './',
		hot: true,
	},
	externals: {

		// jquery: 'jQuery',
		// jquery: '$',//这两种方式都可以
		// VueRouter 这个值为vue-router 导出的接口对象，不知道的查
		vue: 'Vue',
		'vue-router': 'VueRouter'
	},
	plugins: [
		// 这个插件的作用就是把index.html打包到你的bundle.js文件所属目录中，也就是说你bundle.js文件在哪，index.html 就会在哪里
		new HtmlWebpackPlugin({
			title: 'webpack资源加载.....',
			template: './index.html'
		}),
		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: path.join(__dirname, './dist/'), //这里必须是绝对路径
		filename: 'bundle.js'
	},
	module: {
		rules: [{
				// 将css样式进行转换，目的是为了在浏览器中进行正常显示样式代码
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				// 将图片进行转码，目的是为了在浏览器中进行正常显示图片
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				// 将ES6转换为ES5，目的是为了兼容低版本浏览器
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/, //不转换node_model里面的第三方包
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
						cacheDirectory: true //开启babel本地缓存，打包将会更快，babel编译很耗时
					}
				}
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],

			},
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'less-loader'
				]
			}
		],
	},

}
