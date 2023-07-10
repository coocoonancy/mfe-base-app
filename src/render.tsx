import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
interface Loading {
    loading: boolean
}
const render = ({ loading }: Loading): void  => {
    const root = createRoot(document.getElementById('root'));
    root.render(<App loading={loading} />);
}
export default render;
