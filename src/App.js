import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core';
import Home from "./components/routes/home";
import About from "./components/routes/about";
import Contact from "./components/routes/contact";
import AppBar from "./components/appBar";
const theme = createMuiTheme({
  palette:{
    type:"light"
  }
})

const styles = makeStyles(theme => ({
  app: {
    width:"80vw",
    margin: "0 auto"
  },
  "@global": {
    ".pageSection": {
      width: "100%",
      height: "100vh"
    }
  }
}))
function App() {
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.app}>
        <AppBar />
        <Home/>
        <About/>
        <Contact/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

