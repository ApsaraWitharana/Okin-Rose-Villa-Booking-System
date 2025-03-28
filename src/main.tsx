import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import App from './App.tsx';
import './index.css';
import { Login } from './components/Login.tsx';
import { RootState } from './store/store';

function RootComponent() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? <App /> : <Login />;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RootComponent />
        </Provider>
    </StrictMode>
);
