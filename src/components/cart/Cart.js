import React from "react";
import { connect } from "react-redux";
import { delGood } from "../../redux/actionCreator";
import shortid from "shortid";

const style = {
  container: {
    width: "500px",
    height: "auto",
    margin: "20px auto",
    backgroundColor: "#546e7a",
    borderRadius: "10px"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "20px"
  },

  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    listStyle: "none"
  },
  listItem: {
    width: "170px",
    padding: "5px",
    marginBottom: "10px"
  },
  btn: {
    fontSize: "12px"
  }
};

const Cart = ({ card, delGood }) => {
  return (
    <div style={style.container}>
      <h2 style={style.title}>Cart</h2>
      <ul style={style.list}>
        {card.map(({ id, name, description, price }) => (
          <li key={shortid()} style={style.listItem}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <p>{price}</p>
              </div>
              <div className="card-action">
                <button
                  id={id}
                  onClick={() => delGood(id)}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  style={style.btn}
                >
                  Delete from cart
                  <i className="material-icons right">add_shopping_cart</i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mSTP = state => {
  return {
    card: state.card
  };
};

export default connect(mSTP, { delGood })(Cart);
