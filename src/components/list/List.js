import React from "react";
import ListItem from "../listItem/ListItem";
import PropTypes from "prop-types";
import styles from "./list.module.css";

console.log("styles", styles);

const defaultStyles = param => {
  return {
    innerStyle: {
      borderRadius: param,
      background:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQRB_CHwZf5k%2Fmaxresdefault.jpg&f=1&nofb=1"
    }
  };
};



const List = ({ isOpen, data, img, deleteItem }) => {
  const st = defaultStyles("50%");
  return (
    <ul
      style={{
        backgroundImage: `url(${st.innerStyle.background})`,
        ...st.innerStyle
      }}
      className={isOpen ? styles.container : styles.failContainer}
    >
      {data.map(elem => {
        return <ListItem deleteItem={deleteItem} key={elem.id} item={elem} />;
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
