const initialState = [];

/*
{
  name: 'Bananes',
  count: 2,
  unitPrice: 5,
}
*/

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      const newCart = [...state];
      const item = action.item;

      const itemInCart = newCart.find(itemCart => itemCart.name === item.name);
      if (itemInCart === undefined) {
        const itemCart = {
          ...item,
          qty: 1,
        };
        newCart.push(itemCart);
      } else {
        itemInCart.qty += 1;
      }

      
      return newCart;
    }

    case 'CLEAR_CART': {
      return [...initialState];
    }

    default:
      return state;
  }
};

export default reducer;