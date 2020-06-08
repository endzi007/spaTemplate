import React, {useState} from "react";
import { makeStyles } from "@material-ui/core"


const styles = makeStyles(theme => ({
   root:{
       
   }
}))

const Home = ()=>{
  const classes = styles();
  return <div className={`${classes.root} pageSection`}>Home</div>
}

export default Home;  