import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 600,
      border: "2px solid white",
      borderRadius: "6px"
    },
    innerColor: {
      backgroundColor: "white"
    }
  }
}));

export default function BasicTextFields({ onHandleSubmit }) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onHandleSubmit}
    >
      <TextField
        className={classes.innerColor}
        id="outlined-basic"
        label="Search"
        variant="filled"
      />
    </form>
  );
}
