import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import appSlice from 'stores/slices/app';
import useStyles from 'uses/styles';

export default function() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onIconClicked = () => {
    dispatch(appSlice.actions.toggleDrawer());
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={onIconClicked}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>

          <Typography variant="h6">TEST</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
