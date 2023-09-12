const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || '/';
const target = {
  admin: 'https://admin.linklinkiot.com',
  dev: 'https://dev.linklinkiot.com',
  devhome: 'https://devhome.linklinkiot.com',
  devoffice: 'https://devoffice.linklinkiot.com',
  devbusiness: 'https://devbusiness.linklinkiot.com',
  home: 'https://home.linklinkiot.com',
  office: 'https://office.linklinkiot.com',
  business: 'https://business.linklinkiot.com',
  euhome: 'https://euhome.linklinkiot.com',
  euoffice: 'https://euoffice.linklinkiot.com'
}['devoffice'];
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
      },
      proxy: [
        {
          context: [
            '/sfsaas',
            '/cepriplatform',
            '/vt',
            '/vtspace',
            '/vocvtdock',
            '/dlicense',
            '/cloudproject',
            '/officepolicy',
            '/officemerchant',
            '/alarmer',
            '/vtproxy',
            '/workflow',
            '/lang',
            '/devicebill',
            '/appfront',
            '/hifive',
            '/commonredirect',
            '/officemerchant',
            '/vtdockone',
            '/appsync',
            '/iotvehicle',
            '/sugarbi/v1',
            '/peakregulating',
            '/thirdpartyiot',
            '/gb28181server',
            'sfadapter'
          ],
          target,
          secure: false,
          changeOrigin: true
        },
        {
          '/geoconv': {
            target: 'https://api.map.baidu.com',
            secure: false,
            changeOrigin: true
          }
        }
      ]
    }
}