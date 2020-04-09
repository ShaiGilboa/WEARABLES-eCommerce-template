const initialState = {
  id: null,
  status: 'loading', /* -'loading'
                        -'request'
                        -'idle'
                        -'error'
                        -ANY MORE?
                      */
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'value':
      
      break;
  
    default:
      return state;
  };
};