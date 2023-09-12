import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
interface Loading {
    loading: boolean
}
const root = createRoot(document.getElementById('root'));
const render = ({ loading }: Loading): void => {
    root.render(<App loading={loading} />);
}
export default render;
