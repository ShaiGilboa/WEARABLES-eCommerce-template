const initialState = {
  cart: {}, /*an object of item objects.
                we will add to each object a 'quantity' key.
              */
}

export default function cartReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state)); // this creates a 'Deep Copy' of the state
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      if(newState.cart[action.item.id]){
        newState.cart[action.item.id].quantity = Number(newState.cart[action.item.id].quantity) + 1;
      } else {
        newState.cart[action.item.id] = {
          ...action.item,
          quantity: 1,
        }
      }
      return {
        ...newState,
      };

    case 'CHANGE_QUANTITY_OF_ITEM':    
      newState.cart[action.id].quantity = action.newQuantity;
      return {
        ...newState,
      }

    case 'REMOVE_ITEM_FROM_CART':
      delete newState.cart[action.id];
      return {
        ...newState,
      }
    
    default:
      return newState;
  };
};