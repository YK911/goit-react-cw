import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NewsContext } from "../context/NewsContext";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <NewsContext.Consumer>
      {({ onHandleMenuOpen, buttonName }) => (
        <div className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onHandleMenuOpen}
          >
            {buttonName}
          </Button>
        </div>
      )}
    </NewsContext.Consumer>
  );
}
