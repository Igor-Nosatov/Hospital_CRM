import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './routing/index.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import { Provider } from 'react-redux'
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

