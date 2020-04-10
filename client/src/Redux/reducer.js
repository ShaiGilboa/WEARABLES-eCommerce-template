const initialState = {
  id: null,
  status: 'loading', /* -'loading'
                        -'request'
                        -'idle'
                        -'error'
                        -ANY MORE?
                      */
  cart: {}, /*an object of item objects.
                we will add to each object a 'quantity' key.
              */
  userInfo: null, /* this is an object that holds:
                      name - string
                      email - string
                      location? - optional
                      shippingAddresses  - and array of objects that have:
                        - street: string
                        - number: integer
                        - postalCode: string
                        - default: Boolean (whether this is the default address)
                        - description (optional): string (something like 'there's a dog in the house' or 'end of the court yard to the right')\
                        - label (optional): string ('home', 'work', 'parents'....)
                        - ANY MORE?
                  */
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.cart[action.item.id]){
        newState.cart[action.item.id].quantity = newState.cart[action.item.id].quantity + 1;
      } else {
        newState.cart[action.item.id] = {
          ...action.item,
          quantity: 0,
        }
      }
      return {
        ...newState,
      }
      break;
  
    case 'ADD_ITEMS_TO_REDUX':
    state.items = action.items;
    return {
      ...state,
    }
    default:
      return state;
  };
};