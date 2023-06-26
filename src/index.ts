import { registerMicroApps, start } from 'qiankun';
const isProduction = process.env.NODE_ENV === 'production';
const hostName = window.location.host;
registerMicroApps([
  {
    name: 'ai-marketing-platform',
    entry: isProduction ? `//${hostName}/ai_marketing_platform/` : '//localhost:8081',
    container: '#ai-marketing-platform-container',
    activeRule: '/ai-marketing-platform'
  }
]);
start();