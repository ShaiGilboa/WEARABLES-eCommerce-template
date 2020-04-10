import React from "react";
import styled from 'styled-components';
import { 
  useSelector,
  useDispatch,
} from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);
  const cartIds = Object.keys(cart);

  return (
    <Wrapper>
      {cartIds.map((id, index)=><CartItem key={id+index} item={cart[id]}/>)}
      {/* <p>total:  */}
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`

`;