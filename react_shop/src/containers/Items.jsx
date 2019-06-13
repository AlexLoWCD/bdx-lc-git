import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions';

function Items({ items, addToCart }) {
  return (
    <ul className="Items">
      {
        items.map((item, i) => (
          <li key={i}>
            <span>{item.name}</span>
            <br />
            <span>{item.unitPrice}€</span>
            <br />
            <span>
              <button disabled={item.stock === 0} onClick={() => addToCart(item)}>+</button>
            </span>
          </li>
        ))
      }
    </ul>
  )
};

const mstp = state => {
  return {
    items: state.items
  };
}

const mdtp = dispatch => bindActionCreators({
  addToCart
}, dispatch);
 
export default connect(mstp, mdtp)(Items);