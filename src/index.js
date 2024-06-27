import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root')); // 중요
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot> // Recoil쓸려면 무조건
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter> // 라운터를 쓸려면 무조건 써줘야 함 
); // render을 이렇게 써도 된다. / App 으로 선정한 것이 정성이다 
