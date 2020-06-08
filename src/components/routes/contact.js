import React, {useState} from "react";
import { makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux";

const styles = makeStyles(theme => ({
   root:{}
}))

const Contact = ()=>{
  const classes = styles();
  return <div className={`${classes.root} pageSection`}>Contact</div>
}

export default Contact;