import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';
import Store from './store';

export default function App() {
    return (
        <Provider store={Store}>
            <StatusBar barStyle="light-content" />
            <Routes />
        </Provider>
    );
}
