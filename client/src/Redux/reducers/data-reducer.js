const initialState = {
  id: null,
  status: 'idle',
  isLoaded: true, /* -'loading'
                        -'request'
                        -'idle'
                        -'error'
                        -ANY MORE?
                      */
  typaheadItems: null, /*the items array brought back form the server for the typeahead*/
  queries: [],
}

export default function dataReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state)); // this creates a 'Deep Copy' of the state
  switch (action.type) {
    case 'ADD_ITEMS_TO_TYPEAHEAD':
      newState.typaheadItems = action.items;
      return {
        ...newState,
      };
    case 'FETCH_ITEMS_COMPLETED':
      return {
        ...state, isLoaded: false
      };
    case 'FETCH_ITEMS_RESET':
      return {
        ...state, isLoaded: true
      };
    case 'CHANGE_QUERIES':
      let queries = newState.queries;
      if(action.checked===true){
        queries.push(action.value);
      } else {
        queries = queries.filter(query => query !== action.value)
      }
      newState.queries = queries;
      return {
        ...newState,
      }
    case 'CLEAR_QUERIES':
      newState.queries = [];
      return {
        ...newState,
      }
    default:
      return newState;
  };
};

