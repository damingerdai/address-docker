const nodeExternals = require('webpack-node-externals');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "none",
  entry: {
    server: "./src/server.ts"
  },
  devtool: "inline-source-map",
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
			new TsConfigPathsPlugin()
		]
  },
  module: {
    rules: [{
			test: /\.ts$/,
      use: 'awesome-typescript-loader'
    }]
  },
  externals: [nodeExternals()]
};
