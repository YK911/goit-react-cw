import React from "react";
import goods from "../../goods.json";
import { connect } from "react-redux";
import { addGood } from "../../redux/actionCreator";

const style = {
  container: {
    width: "500px",
    margin: "0 auto"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "right",
    margin: "20px"
  },

  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none"
  },
  listItem: {
    padding: "5px",
    marginBottom: "10px"
  },
  btn: {
    fontSize: "12px"
  }
};

const Card = ({ card, addGood }) => (
  <>
    <div style={style.container}>
      <h2 style={style.title}>In cart {card.length} goods</h2>
      <ul style={style.list}>
        {goods.map(({ id, name, description, price }) => (
          <li key={id} style={style.listItem}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <p>{price}</p>
              </div>
              <div className="card-action">
                <button
                  id={id}
                  onClick={() => addGood(id)}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  style={style.btn}
                >
                  Add to card
                  <i className="material-icons right">add_shopping_cart</i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const mSTP = state => {
  return {
    card: state.card
  };
};

export default connect(mSTP, { addGood })(Card);
