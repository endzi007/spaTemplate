import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    left: 0,
    height: "60px",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    position: "fixed",
  },
  topBar: {
    backgroundColor: theme.palette.secondary.main
  },
  mainMenu: {
    backgroundColor: theme.palette.primary.main
  },
  innerAppBar: {
      width: "80%",
      margin: "0 auto"
  }
}));

export default () => {
  const classes = useStyles();
  return (
      <div className={classes.appBar}>
          <div className={classes.innerAppBar}>
            <div className={classes.topBar}>Top Menu</div>
            <div className={classes.mainMenu}>Main menu</div>
          </div>
      </div>
  );
}
