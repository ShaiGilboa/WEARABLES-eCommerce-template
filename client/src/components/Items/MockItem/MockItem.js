import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../../Redux/actions';

const MockItem = ({ item }) => {
 const dispatch = useDispatch();
 return (
  <Wrapper >
   <ProductName >{item.name}</ProductName>
   <ModelDetail>
    <ModelInfo>
     <Category>{item.category}</Category>
     <strong>Model Id:</strong>
     <span >{item.id}</span>
    </ModelInfo>
   </ModelDetail>
   <ItemContainer >
    <ImageWrapper >
     <ItemImage src={item.imageSrc} />
     <ItemOverview>Overview</ItemOverview>
     <ItemDescription>Item Description</ItemDescription>
    </ImageWrapper>
    <ItemCart>
     <ItemPrice>{item.price}</ItemPrice>
     <ItemStock>{item.numInStock}</ItemStock>
     <AddToCartButton onClick={() => dispatch(addItemToCart(item))}>
      <span>Add to Cart</span>
     </AddToCartButton>
    </ItemCart>
   </ItemContainer>
  </Wrapper>
 );
}

export default MockItem;

const Wrapper = styled.div`
display: block;
`;

const ProductName = styled.h1`
font-size: 24px;
font-weight: 400;
line-height:32px;
`;

const ModelDetail = styled.div`
`;

const ModelInfo = styled.div`
font-size: 12px;
margin: 0 16px 0 0;
`;

const Category = styled.div``;

const ItemContainer = styled.div`
box-sizing: border-box;
display:flex;
flex: 0 1 auto;
flex-wrap: wrap;
margin-right: 0;
margin-left: 0;
`;

const ItemCart = styled.div``;

const ItemDescription = styled.div``;
const ItemImage = styled.img``;
const AddToCartButton = styled.div``;
const ItemStock = styled.div``;
const ImageWrapper = styled.div``;
const ItemOverview = styled.h2`
font-size: 20px;
font-weight: 600;
line-height: 24px;
margin: 0 0 16px;
`;
const ItemPrice = styled.div``;