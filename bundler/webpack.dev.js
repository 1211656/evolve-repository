const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.js'); // Nome correto da variável
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Adicionado
const path = require('path');
const devConfig = {
    mode: 'development',
    entry: './src/3d/script.js',
    devServer: {
        static: {
            directory: './dist',
        },
        compress: true,
        port: 8001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/termos-e-privacidade.html'),
            filename: 'termos-e-privacidade.html',
            chunks: []
        }),
       
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './static', to: 'static' },
            ],
        }),
        
    ],
};

module.exports = merge(commonConfig, devConfig);