import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 600
    }
  },
  container: {
    "& > *": {
      margin: "0 auto",
      width: 600
    }
  }
}));

export default function BasicTextFields({ onHandleSubmit }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onHandleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="What's for you today"
          variant="outlined"
        />
      </form>
    </div>
  );
}
