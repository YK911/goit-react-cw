import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { toggle } from "../HOC/toggle";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "20px",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const AlignItemsList = ({
  image,
  title,
  author,
  description,
  source,
  query
}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {author}
              </Typography>
              {description}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default toggle("https//:somefindNews")(AlignItemsList);
