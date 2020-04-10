import React from "react";
import styled from 'styled-components';
import { 
  useSelector,
  useDispatch,
} from 'react-redux';

import CartItem from './CartItem';
import {
  totalAmount,
} from '../../utils';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);
  const cartIds = Object.keys(cart);

  const total = totalAmount(cart, cartIds);

  return (
    <Wrapper>
      {cartIds.map((id, index)=><CartItem key={id+index} item={cart[id]}/>)}
      <p>total: ${total}</p>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`

`;