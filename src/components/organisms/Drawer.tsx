import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@material-ui/core';
import { Mail, MoveToInbox } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import useStyles from 'uses/styles';

export default function() {
  const classes = useStyles();
  const drawer = useSelector((state: RootState) => state.app.drawer);

  return (
    <Drawer
      variant="persistent"
      open={drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
