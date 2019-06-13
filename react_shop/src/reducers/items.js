const initialState = [{
  name: 'Bananes',
  unitPrice: 5,
  stock: 2,
}, {
  name: 'Pommes',
  unitPrice: 3,
  stock: 3,
}, {
  name: 'Poires',
  unitPrice: 9,
  stock: 5,
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Pourquoi "map" ?
      // Je pars d'une liste d'item
      // Je veux uniquement changer une propriété d'un des éléments
      // "map" me retourne un nouveau tableau, de même longueur
      // avec des éléments éventuellements modifiés

      return state.map(item => {
        // Je récupère l'item sur lequel je viens de cliquer
        const itemSelected = action.item;
        if (item.name === itemSelected.name) {
          // Si l'élément sur lequel je suis en train de "mapper" est celui sur lequel j'ai cliqué
          // alors je diminue le stock (aka : je retourne un nouvel objet dont le stock a diminué)
          return {
            ...item,
            stock: item.stock - 1,
          };
        }
        // Sinon, je retourne l'item tel quel.
        return item;
      });
    }
    case 'CLEAR_CART': {
      return [...initialState];
    }
    default:
      return state;
  }
};

export default reducer;