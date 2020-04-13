const initialState = {
  id: null,
  status: 'loading', /* -'loading'
                        -'request'
                        -'idle'
                        -'error'
                        -ANY MORE?
                      */
  typaheadItems: null, /*the items array brought back form the server for the typeahead*/
}

export default function dataReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state)); // this creates a 'Deep Copy' of the state
  switch (action.type) {
    case 'ADD_ITEMS_TO_TYPEAHEAD':
      newState.typaheadItems = action.items;
      return {
        ...newState,
      };
    default:
      return newState;
  };
};

