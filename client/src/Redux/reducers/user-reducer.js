const initialState = {

  status: 'idle', /* -'loading'
                        -'request'
                        -'success'
                        -'error'
                        -ANY MORE?
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
  // switch (action.type) {
  //   case '...':
      
  //   default:
  //     return ...;
  // };
};
