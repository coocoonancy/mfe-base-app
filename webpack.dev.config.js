const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
    output: {
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: ASSET_PATH
    },
    devtool: 'inline-source-map',
    devServer: {
      open: true,
      port: '8080',
      hot: true,
      host: 'localhost',
      disableHostCheck: true,
      clientLogLevel: 'warning',
      compress: false,
      historyApiFallback: true,
      overlay: { warnings: false, errors: true },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      static: {
        directory: path.resolve(__dirname, 'public')
      }
    }
}