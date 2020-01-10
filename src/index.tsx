import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'components/pages/Index';
import Count from 'components/pages/Count';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'stores';
import { Provider } from 'react-redux';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import Styles from 'components/layouts/Styles';

ReactDOM.render(
  <Styles>
    <Provider store={store}>
      <BrowserRouter>
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField />
        <Switch>
          <Route path="/" exact children={<Index />} />
          <Route path="/count" children={<Count />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </Styles>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
