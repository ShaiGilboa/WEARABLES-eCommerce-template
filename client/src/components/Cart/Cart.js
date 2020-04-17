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
        {cartIds.map((id, index)=><CartItem key={id+index} item={cart[id]} toggle={toggle}/>)}
      </ItemsContainer>
      <Footer>
        <p>Total: ${total}</p>
        <CheckoutBtn
          onClick={()=>{
            toggle();
            history.push('/checkout');
          }}
        >Continue to checkout
        </CheckoutBtn>
      </Footer>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  padding: 0 30px 30px 30px;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  margin-bottom: 40px;
  height: 100%;
  grid-template-areas:
    'header'
    'items-container'
    'footer';
`;

const Header = styled.h2`
  grid-area: header;
  font-size: 1.5em;
  font-weight: 400;
  height: 40px;
`;

const ItemsContainer = styled.div`
  grid-area: items-container;
  overflow-y:auto;
`;

const Footer = styled.div`
  grid-area: footer;
  margin-bottom: 5rem;
  p{
    font-size: 1.2em;
  }
`;

const CheckoutBtn = styled(Button)`
outline: none;
background-color: red;
color: white;
padding: 10px 30px;
border: 1px solid white;
font-size: 1em;
margin-top: 10px;
cursor: pointer;
border-radius: 4px;
`;