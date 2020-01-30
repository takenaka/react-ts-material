import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'components/pages/Index';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'stores';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Styles from 'components/layouts/Styles';

ReactDOM.render(
  <Styles>
    <Provider store={store}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Sample App
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<Index />} />
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
