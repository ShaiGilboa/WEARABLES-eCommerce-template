import React from "react";
import styled from 'styled-components';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import CartItem from './CartItem';
import Cart from '../Cart';


import {
  totalAmount,
} from '../../utils';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.userInfo.cart);
  const cartIds = Object.keys(cart);

  const total = totalAmount(cart, cartIds)
  return (
    <Wrapper>
      <div>Checkout: {total}</div>
      <ItemsContainer>
        {/* {cartIds.map(itemId=><CartItem key={itemId} item={cart[itemId]} />)} */}
        {/* <Cart /> */}
      </ItemsContainer>
    </Wrapper>
  );
}

export default Checkout;

const Wrapper = styled.div`

`;

const ItemsContainer = styled.ul`

`;