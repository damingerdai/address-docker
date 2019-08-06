const nodeExternals = require('webpack-node-externals');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "none",
  entry: {
    server: "./src/server.ts"
  },
	devtool: "source-map",
	devServer: {
		contentBase: './dist',
		port: 4000,
		openPage: 'graphql'
	},
  target: "node",
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      'node_modules',
      'src',
    ],
		plugins: [
			new TsConfigPathsPlugin(),
		]
  },
  module: {
    rules: [{
			test: /\.ts$/,
      use: 'awesome-typescript-loader'
    }]
  },
	externals: [nodeExternals()],
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 30000, // 模块的最小体积
			minChunks: 1, // 模块的最小被引用次数
			maxAsyncRequests: 5, // 按需加载的最大并行请求数
			maxInitialRequests: 3, // 一个入口最大并行请求数
			automaticNameDelimiter: '~', // 文件名的连接符
			name: true,
			cacheGroups: { // 缓存组
					vendors: {
							test: /[\\/]node_modules[\\/]/,
							priority: -10
					},
					default: {
							minChunks: 2,
							priority: -20,
							reuseExistingChunk: true
					}
			}
		}
	}
};
