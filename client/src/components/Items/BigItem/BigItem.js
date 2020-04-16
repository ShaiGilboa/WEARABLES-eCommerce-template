import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  Link,
  useParams,
} from 'react-router-dom';

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

  useEffect(() => {
    fetch(`/items/${itemId}`)
      .then(res => res.json())
      .then(payload => { setItem(payload) })
      // need to add the company info, doing to have to chain the ".then"s, because it is dependent on the company id in the item object
      .then(data => {
        console.log(data)
        fetch(`/companies/${data.companyId}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCompany(data)
          })
      }
      )
  }, [itemId]);

  let product;
  if (item && item.item && company) {
    product = item.item;
    console.log(company);
  }

  return (
    <>
      {item && item.item && company ? (
        // <Wrapper>
        //   <ItemImage src={product.imageSrc} />
        //   <ItemInfo>
        //     <h2>{product.name}</h2>
        //     <div style={{ display: 'flex', flexDirection: 'row' }}>
        //       <p>{product.price}</p>
        //       <p>{product.category}</p>
        //     </div>
        //     <Link to={`/items/companyId=${product.companyId}`}>{product.companyId}</Link>
        //     <p>amount in stock: {product.numInStock}</p>
        //   </ItemInfo>
        // </Wrapper>
        <Wrapper >
          <ProductName >{product.name}</ProductName>
          <ModelDetail>
            <ModelInfo>
              <Category>{product.category}</Category>
              <strong>Model Id:</strong>
              <span >{product.id}</span>

            </ModelInfo>
          </ModelDetail>
          <ItemContainer >
            <ImageWrapper >
              <ItemImage src={product.imageSrc} />
              <ItemOverview>Overview</ItemOverview>
              <ItemDescription>Item Description</ItemDescription>
            </ImageWrapper>
            <ItemCart>
              <ItemPrice>Price:{product.price}</ItemPrice>
              <ItemStock>Item stock: {product.numInStock}</ItemStock>
              {/* <AddToCartButton onClick={() => dispatch(addItemToCart(item))}> 
                <span>Add to Cart</span>
              </AddToCartButton> */}
            </ItemCart>
          </ItemContainer>
        </Wrapper>
      ) : (
          <div>Hello</div>
        )
      }
    </>
  );
}

export default BigItem;

// const Wrapper = styled.div`
//     display: flex;

// `;

// const ItemImage = styled.img`

// `;

// const ItemInfo = styled.div`

// `;
const Wrapper = styled.div`
/* display: block;
height: 500px;
border: 1px solid #e6ecf0; */
`;

const ProductName = styled.h1`
/* font-size: 24px;
font-weight: 400;
line-height:32px; */
`;

const ModelDetail = styled.div`
`;

const ModelInfo = styled.div`
/* font-size: 12px;
margin: 0 16px 0 0; */
`;

const Category = styled.div``;

const ItemContainer = styled.div`
/* box-sizing: border-box;
display:flex;
flex: 0 1 auto;
flex-wrap: wrap;
margin-right: 0;
margin-left: 0; */
`;

const ItemCart = styled.div``;

const ItemDescription = styled.div``;
const ItemImage = styled.img`
/* width: 150px;
height: 150px; */
`;
const AddToCartButton = styled.div``;

const ItemStock = styled.div``;

const ImageWrapper = styled.div`
/* display: flex;
justify-content: center;
padding: 30px; */
`;

const ItemOverview = styled.h2`
/* font-size: 20px;
font-weight: 600;
line-height: 24px;
margin: 0 0 16px; */
`;
const ItemPrice = styled.div``;