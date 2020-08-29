/**
 * Action types
 */
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/**
 * Actions
 */
export const addToCart = (
  id = -1,
  title = '',
  price = '0',
  sale_price = '0',
  unit = '',
  image = ''
) => ({
  type: ADD_TO_CART,
  id,
  title,
  price,
  sale_price,
  unit,
  image
});

export const removeFromCart = (id = -1) => ({
  type: REMOVE_FROM_CART,
  id
});

/**
 * Reducer
 */
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cart = state.cart || [];
      return Object.assign({}, state, {
        cart: [
          ...cart,
          {
            id: action.id,
            title: action.title,
            price: action.price,
            offPrice: action.offPrice,
            unit: action.unit,
            image: action.image
          }
        ]
      });
    case REMOVE_FROM_CART:
      console.log('@From store (REMOVE_FROM_CART):', state);
      return state;
    default:
      return state;
  }
}
