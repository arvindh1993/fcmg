import React from 'react';

import './App.css';

import Help from './Help';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
export default class Routing extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <Route path={""} component={App} />
                <Route path={"/help"} component={Help} />
            </BrowserRouter>
        );
    }
}
