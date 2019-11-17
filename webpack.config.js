const isDev = process.env.NODE_ENV === 'development'
const path = require('path')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    path.join(__dirname, 'App.js')
  ],
  externals: {
    'react-native': 'react-native',
    'react-native-maps': 'react-native-maps'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-native$': 'react-native-web'
    }
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
}
