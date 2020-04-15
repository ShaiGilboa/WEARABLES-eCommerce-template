import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  addItemToCart,
} from '../../../Redux/actions';
import { FormHelperText } from "@material-ui/core";

const SmallItem = ({
  item
}) => {
  const {
    id,
    name,
    price,
    body_location,
    category,
    imageSrc,
    numInStock,
    companyId,
  } = item;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <ImageWrapper>
        <ItemImage src={imageSrc} />
      </ImageWrapper>
      <InfoWrapper>
        <ItemInfo>
          <div style={{ height: '150px' }}>
            <h2>{name}</h2>
            <CategoryItem>{category}</CategoryItem>
          </div>
          <div>
            <p style={{ fontSize: '1.2em', paddingBottom: '7px' }}>{price}</p>
          </div>

          {/* <Link to={`/items/companyId=${companyId}`}>{companyId}</Link> */}
          <p>amount in stock: {numInStock}</p>
        </ItemInfo>
      </InfoWrapper>
      {/* <ButtonWrapper data-css='ButtonWrapper'> */}
      <AddToCartButton
        onClick={() => dispatch(addItemToCart(item))}>
        <AddCircleOutlineIcon style={{ paddingRight: '20px' }} />Add to cart
      </AddToCartButton>
      {/* </ButtonWrapper> */}
    </Wrapper>
  );
}

export default SmallItem;

const Wrapper = styled.div`
border: 1px solid #e6ecf0;
height: 510px;
/* padding: 30px; */
`;

const CategoryItem = styled.h3`
padding: 4px;
border-radius: 4px;
background:red;
color:white;
font-size: .7em;
display: inline-block;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`
const InfoWrapper = styled.div`
  border-top: 1px solid #e6ecf0;
  padding: 30px;
  background-color: #F4F7F6;
`

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`;

const ItemInfo = styled.div`
  h2{
    line-height: 1.2em;
    padding-bottom: 15px;
  }
`;
const AddToCartButton = styled.button`
outline: none;
padding: 10px 30px;
font-size: 1em;
border: none;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
`

// const ButtonWrapper = styled.div`
// display: flex;
// justify-content: space-between;

// `