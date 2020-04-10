import React from "react";
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';

import {
  changeQuantityOfItem,
} from '../../../Redux/actions';

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
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.div`

`;