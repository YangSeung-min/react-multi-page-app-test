const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    // 'whatwg-fetch' : IE에서 fetch를 사용하기 위해 필요하다.
    // '@babel/polyfill' : IE에서 Promise를 사용하기 위해 필요하다.
    // main: ['whatwg-fetch', '@babel/polyfill','./public/main/resources/static/js/es6/main.js'],
    index: './public/devJs/index.js',
    sub: './public/devJs/sub.js'
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: '[name].js',
    // publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'public/devJs')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
            // presets: ['@babel/react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  // development/production
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};