import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default ListItem;
