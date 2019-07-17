'use strict';

const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'none',
    entry: {
        server: './server.ts' 
    },
    target: 'node',
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: 'awesome-typescript-loader'
            }
        ]
    }
}