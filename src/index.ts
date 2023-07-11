import { registerMicroApps, start } from 'qiankun';
const isProduction = process.env.NODE_ENV === 'production';
const hostName = window.location.hostname;

import render from './render';

render({ loading: true });
const loader = (loading: boolean) => render({ loading });
// 初始化应用
// 注册子应用
registerMicroApps([
  {
    name: 'data-center',
    entry: isProduction ? `//${hostName}/data-center` : '//localhost:8081',
    container: '#data-center',
    activeRule: '/data-center',
    loader
  },
  {
    name: 'ai-marketing-platform',
    entry: isProduction ? `//${hostName}/ai_marketing_platform/` : '//localhost:8082',
    container: '#ai-marketing-platform-container',
    activeRule: '/ai-marketing-platform',
    loader
  }
]);
// 设置子应用
window.history.pushState(null, '', isProduction ? `//${hostName}/data-center` : '//localhost:8081');
// 启动应用
start();