import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch11/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 중요
root.render(<App />); // render을 이렇게 써도 된다. / App 으로 선정한 것이 정성이다 
