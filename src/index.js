import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// recoilroot로 감싸기
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
