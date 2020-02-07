import React from "react";
import Select from "../../select/Select";
import { options } from "../../select/Select";

const findOpt = word => options.find(elem => elem.value === word);

const choosePriority = {
  low: {
    border: "1px solid blue"
  },
  high: {
    border: "1px solid red"
  },
  normal: {
    border: "1px solid green"
  }
};

const WishListItem = ({
  title,
  date,
  id,
  onDeleteWish,
  priority,
  onUpdatePriority
}) => {
  const styles = choosePriority[priority];

  // const styles = choosePriority(priority);

  return (
    <li style={styles}>
      <h2>{title}</h2>
      <p>{date}</p>
      <button type="button" onClick={() => onDeleteWish(id)}>
        delete
      </button>
      <Select
        value={findOpt(priority)}
        onChooseSelect={e => onUpdatePriority(e.value, id)}
      />
    </li>
  );
};

export default WishListItem;
