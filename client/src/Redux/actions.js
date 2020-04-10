/* here we will have the various actions:
  setUser
  addItemToCart
  removeItemFromCart
  changeUserInfo
*/

export const addItemToCart = (item) => ({
  type: 'ADD_ITEM',
  item,
})

export const addItemsReduxStore = (items) => ({
  type: 'ADD_ITEMS_TO_REDUX',
  items,
})