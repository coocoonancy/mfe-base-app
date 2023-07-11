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
    name: 'sfsassui',
    entry: isProduction ? `//${hostName}/` : '//localhost:8081',
    container: '#sub-app',
    activeRule: '/sfsassui',
    loader
  },
  {
    name: 'ai-marketing-platform',
    entry: isProduction ? `//${hostName}/ai_marketing_platform/` : '//localhost:8082',
    container: '#sub-app',
    activeRule: '/ai-marketing-platform',
    loader
  }
]);
// 设置子应用
window.history.pushState(null, '', '/sfsassui');
// 启动应用
start({ sandbox: { strictStyleIsolation: true } });