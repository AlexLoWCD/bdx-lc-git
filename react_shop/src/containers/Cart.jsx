import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearCart } from '../actions';

function Cart({ cart, clearCart }) {
  return (
    <ul className="Cart">
      <button onClick={clearCart}>Clear</button>
      {cart.map((item, i) => (
        <li key={i}>
          <span>Nom: {item.name}</span>
          <br />
          <span>Quantité: {item.qty}</span>
          <br />
          <span>Prix total: {item.unitPrice * item.qty}€</span>
        </li>
      ))}
    </ul>
  );
};

const mstp = state => ({
  cart: state.cart,
});

const mdtp = dispatch => bindActionCreators({
  clearCart
}, dispatch);

export default connect(mstp, mdtp)(Cart);