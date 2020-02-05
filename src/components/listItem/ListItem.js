import React from "react";
import PropTypes from "prop-types";
import * as styles from "./listItem.style";
import { Item } from "./listItem.style";

console.log("---", styles);

const ListItem = ({ item, deleteItem }) => {
  return (
    <Item>
      <button onClick={() => deleteItem(item.id)}>DELETE</button>
      {item.name}
    </Item>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default ListItem;
