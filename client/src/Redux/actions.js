/* here we will have the various actions:
  setUser
  addItemToCart
  removeItemFromCart
  changeUserInfo
*/

export const addItemToCart = (item) => ({
  type: 'ADD_ITEM_TO_CART',
  item,
})

export const addItemsToTypeahead = (items) => ({
  type: 'ADD_ITEMS_TO_TYPEAHEAD',
  items,
})

export const changeQuantityOfItem = (id, newQuantity) => ({
  type: 'CHANGE_QUANTITY_OF_ITEM',
  id,
  newQuantity,
})

export const removeItemFromCart = (id) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  id,
})

export const addTotalToCart = (total) => ({
  type: 'ADD_TOTAL_TO_CART',
  total,
})

export const addUserInfoLogin = (user) => ({
  type: 'ADD_USER_INFO_LOGIN',
  user,
})