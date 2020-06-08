import React, {useState} from "react";
import { makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux";

const styles = makeStyles(theme => ({
   root:{}
}))

const About = ()=>{
  const classes = styles();
  return <div className={`${classes.root} pageSection`}>About</div>
}

export default About;