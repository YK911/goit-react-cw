import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const List = ({ data }) => {
  console.log("props", data);

  return (
    <ul>
      {data.map(elem => {
        return <ListItem key={elem.id} item={elem} />;
      })}
    </ul>
  );
};

List.defaultProps = {
  data: ["i am arr"]
};

List.propTypes = {
  data: PropTypes.array
};

export default List;
