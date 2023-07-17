import React from 'react';
import type { MenuProps } from 'antd';
import { ConfigProvider, Spin, Button, Dropdown } from 'antd';
import { routes } from './index';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './App.css';
type appProps = {
    loading?: Boolean
}

function goToSubApp<T extends string | URL>(route: T) {
   window.history.pushState(null, '', route);
}

const App = (props: appProps) => {
    const { loading } = props;
    const items: MenuProps['items'] = [
        {
            key: 'sfsassui',
            label: (
                <div  onClick={() => goToSubApp('/sfsassui')}>
                    数据中台
                </div>
            ),
        },
        {
            key: 'ai-marketing-platform',
            label: (
                <div onClick={() => goToSubApp('/ai-marketing-platform')}>
                    AI营销中心
                </div>
            ),
        },
    ]
    return (
        <ConfigProvider locale={zhCN}>
            <div className="main-app">
                <header>
                    <Dropdown menu={{ items }} placement="bottom">
                        <Button>应用</Button>
                    </Dropdown>
                </header>
                <div id="sub-app"></div>
                {/* { loading ? <Spin className="spin" /> : <div id="sub-app"></div> } */}
            </div>
        </ConfigProvider>
    )
};
export default App;