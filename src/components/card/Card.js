import React from "react";
import goods from "../../goods.json";

const style = {
  list: {
    display: "flex",
    flexwrap: "wrap",
    justifyContent: "space-between",
    liststyle: "none",
    border: "2px solid black",
    padding: "5px"
  },
  listItem: {
    border: "2px solid black",
    padding: "5px"
  }
};

const Card = () => (
  <>
    <div>
      <ul className={style.list}>
        {goods.map(({ id, name, description, price }) => (
          <li key={id} className={style.listItem}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <button id={id}>Add to card</button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Card;
