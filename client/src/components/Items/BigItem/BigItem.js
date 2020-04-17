import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {
  Link,
  useParams,
} from 'react-router-dom';

import {addItemToCart} from '../../../Redux/actions';

const BigItem = ({
  // id,
  // name,
  // price,
  // body_location,
  // category,
  // imageSrc,
  // numInStock,
  // companyId,
}) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [company, setCompany] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/items/${itemId}`)
      .then(res => res.json())
      .then(payload => {
        setItem(payload)
        fetch(`/companies/${payload.item.companyId}`)
          .then(res => res.json()
            .then(data => {
              setCompany(data)
            }))
      })


  }, [itemId]);

  let product, manufacturer;

  if (item && item.item && company && company.company) {
    product = item.item;
    manufacturer = company.company;
  }

  return (
    <>
      {item && item.item && company && company.company ? (
        <Wrapper>

          <ImageWrapper >
            <ItemImage src={product.imageSrc} />
          </ImageWrapper>

          <InfoWrapper>
            <ProductName>{product.name}</ProductName>
            <ModelDetail>
              <ModelInfo>
                <div style={{ display: 'flex' }}>
                  <h2>Model Id: </h2>
                  <span> {product.id}</span>
                  <h2>Manufacturer: </h2>
                  <a href={manufacturer.url} target="_blank"> {manufacturer.name}</a>
                </div>
              </ModelInfo>
              <Category>{product.category}</Category>
            </ModelDetail>

            <ItemCart style={{ display: 'block', }}>
              <h2>Price:{product.price}</h2>
              <h3>Item stock: {product.numInStock}</h3>
              <AddToCartButton onClick={() => dispatch(addItemToCart(product))}> 
                <span>Add to Cart</span>
              </AddToCartButton>
            </ItemCart>

          </InfoWrapper>
        </Wrapper>
      ) : (
          <div>Hello</div>
        )
      }
    </>
  );
}

export default BigItem;

const Wrapper = styled.div`
border: 1px solid red;
display: flex;
justify-content: center;
width: 100%;
`;

const ProductName = styled.h1`
font-size: 25px;
`;

const ModelDetail = styled.div`
font-size: 20px;
`;

const ModelInfo = styled.div`
padding: 10px 0;
`;

const Category = styled.div`
display: inline-block;
font-size: 20px;
padding: 5px ;
margin: 15px 0;
border-radius: 4px;
background: red;
color: white;
`;

const ItemCart = styled.div`
font-size: 24px;
margin-top: 50px;
h2{
  margin-bottom: 5px;
}
h3 {
}
`;
const InfoWrapper = styled.div`
padding: 60px;
`;

const ItemImage = styled.img`
padding: 60px;
width: 500px;
height: 500px;
`;

const AddToCartButton = styled.button`
outline: none;
`;



const ImageWrapper = styled.div`

`;

