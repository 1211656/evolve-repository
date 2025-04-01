const CopyWebpackPlugin = require('copy-webpack-plugin')
const loader = require('html-loader')
const { url } = require('inspector')

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
   
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    
                    {
                        loader: 'css-loader',
                        options:
                        {
                            url: true,
                            import: true
                        }
                    }
                   
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource', // Garante que as imagens sejam tratadas como recursos
                generator: {
                    filename: 'assets/images/[name][ext]', // Define o local de saída das imagens
                },
            },
        ]
    }
}
