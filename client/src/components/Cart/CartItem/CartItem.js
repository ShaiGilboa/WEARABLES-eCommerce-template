import React from "react";
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';

import {
  changeQuantityOfItem,
  removeItemFromCart,
} from '../../../Redux/actions';

import RemoveButton from '../../UnstyledButton';

const CartItem = ({item}) => {
  const {
    id,
    name,
    price,
    quantity,
  } = item;
  const dispatch = useDispatch()

  const handleInput = (event) => {
    if(event.target.value>0)dispatch(changeQuantityOfItem(id,event.target.value));
  }

  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>{price}</p>
      <input
        value={quantity}
        onChange={(event)=>handleInput(event)}
      />
      <RemoveButton
      onClick={()=>dispatch(removeItemFromCart(id))}
      >X</RemoveButton>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.div`

`;