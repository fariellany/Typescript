import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
import ButtonDemo from './containers/antd/button/index'
import './baseDemo';

export const App = hot(module)(() => (
    <Switch>
        <Route path="/" component={ButtonDemo} />
    </Switch>
));
