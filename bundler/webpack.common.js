const CopyWebpackPlugin = require('copy-webpack-plugin');
const loader = require('html-loader');
const { url } = require('inspector');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
     

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true
            }
          }
        ]
      },

      // Images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]' // colocar imagens na pasta dist/static com mesmo nome
        }
      },

      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts/'
            }
          }
        ]
      },

      // Imagens com asset/resource (melhor alternativa no Webpack 5)
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
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
    new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../static'),
            to: 'assets/images',
          },
        ],
    }),
  ],
};
