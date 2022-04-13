import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <RecoilRoot>
            <Route component={App} path='/' />
        </RecoilRoot>
    </BrowserRouter>,
    document.getElementById('root')
);
