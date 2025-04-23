const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: 'production',
   
    entry: './src/3d/script.js',

    // Define também a saída do build
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },

    plugins: [
        
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/termos-e-privacidade.html'),
            filename: 'termos-e-privacidade.html',
            chunks: []
        }),
        
        
    ],
    
    
});