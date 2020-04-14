import React from 'react';
import styled from 'styled-components';

const CartItem = ({item}) => {
  const {
    id,
    name,
    price,
    quantity,
    category,
    imageSrc,
    companyId,
  } = item;


  return (
    <Wrapper>
      <img src={imageSrc} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{quantity}</p>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.li`

`;