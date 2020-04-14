import React from "react";
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';
import { useHistory } from 'react-router-dom';

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
  const [longFormOfNameFlag, setLongFormOfNameFlag] = React.useState(false)

  const dispatch = useDispatch()
  let history = useHistory();

  const handleInput = (event) => {
    if(event.target.value>=0)dispatch(changeQuantityOfItem(id,Number(event.target.value)));
  }

  const handleClickOnItem = (ev, id) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/items/${id}`);
  }

  return (
    <Wrapper
      onClick={()=>setLongFormOfNameFlag(!longFormOfNameFlag)}
    >
      <Name 
        onClick = {(event) =>handleClickOnItem(event, id)}
        long={longFormOfNameFlag?true:false}
      >
        <h2>{name}</h2>
      </Name>
      <p>{price}</p>
      <ItemQuantityInput
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
  &:hover{
    cursor: pointer;
  }
`;

const Name = styled.div`
  &:hover{
    text-decoration: underline;
  }
  h2{
    ${props=>props.long?null:(
      `overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;`
    )}
  }
`;

const ItemQuantityInput = styled.input`

`;