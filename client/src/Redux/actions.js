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

export const removeOneItemFromCart = (item) => ({
  type: 'REMOVE_ONE_ITEM_FROM_CART',
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

export const updateUserInfo = (newUserInfo) => ({
  type: 'UPDATE_USER_INFO',
  newUserInfo,
})

export const changeStatus = (newStatus) => ({
  type: 'CHANGE_STATUS',
  newStatus,
})

export const fetchCompleted = () => ({
  type: 'FETCH_ITEMS_COMPLETED',
})

export const fetchResetStatus = () => ({
  type: 'FETCH_ITEMS_RESET',
})

export const addtoPuschaseHistory = (payload) => ({
  type: 'ADD_TO_PURSHASE_HISTORY',
  payload,
})

export const changeQueries = (value, checked) => ({
  type: 'CHANGE_QUERIES',
  value,
  checked,
})