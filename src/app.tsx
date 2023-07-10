import React from 'react';
import type { MenuProps } from 'antd';
import {  ConfigProvider, Spin, Button, Dropdown } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './App.css';
interface appProps {
    loading?: Boolean
}

const App: React.FC<appProps> = (props) => {
    const { loading } = props;
    let isProduction: boolean = process.env.NODE_ENV === 'production';
    let hostName: string = window.location.hostname;
    const items: MenuProps['items'] = [
        {
        key: 'data-center',
        label: (
            <a target="_blank" rel="noopener noreferrer" href={isProduction ? `//${hostName}/data-center` : '//localhost:8080'}>
            数据中台
            </a>
        ),
        },
        {
            key: 'ai-marketing-platform',
            label: (
                <a target="_blank" rel="noopener noreferrer" href={isProduction ? `//${hostName}/ai_marketing_platform/` : '//localhost:8081'}>
                AI营销中心
                </a>
            ),
        },
    ]
    return (
        <ConfigProvider locale={zhCN}>
            <div className="app">
                <header>
                    <Dropdown menu={{ items }} placement="topLeft" arrow>
                        <Button>应用</Button>
                    </Dropdown>
                </header>
                { loading ? <Spin /> : <div></div> }
            </div>
        </ConfigProvider>
    )
};
export default App;