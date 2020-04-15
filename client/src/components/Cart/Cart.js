import React from "react";
import styled from 'styled-components';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  useHistory,
} from 'react-router-dom';


import {
  addTotalToCart,
} from '../../Redux/actions';

import CartItem from './CartItem';
import Button from '../UnstyledButton';
import {
  totalAmount,
} from '../../utils';

const Cart = ({toggle}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.userInfo.cart);
  const cartIds = Object.keys(cart);

  const total = totalAmount(cart, cartIds);

  return (
    <Wrapper>
      <Header>Your shopping cart </Header>
      <ItemsContainer>
        {cartIds.map((id, index)=><CartItem key={id+index} item={cart[id]}/>)}
      </ItemsContainer>
      <Footer>
        <p>total: ${total}</p>
        <CheckoutBtn
          onClick={()=>{
            toggle();
            history.push('/checkout');
          }}
        >Checkout
        </CheckoutBtn>
      </Footer>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  height: 100%;
  grid-template-areas:
    'header'
    'items-container'
    'footer';
`;

const Header = styled.h2`
  grid-area: header;
`;

const ItemsContainer = styled.div`
  grid-area: items-container;
  overflow-y:auto;
`;

const Footer = styled.div`
  grid-area: footer;
`;

const CheckoutBtn = styled(Button)`

`;