const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    filename: 'app.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  devServer: {
    hot: true,
  },
};
