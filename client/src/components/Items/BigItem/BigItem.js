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
  const [item, setItem] = useState(null)
  useEffect(() => {
    fetch(`/items/${itemId}`)
      .then(res => res.json())
      .then(payload => setItem(payload))
  }, [])

  let product;
  if (item && item.item) {
    product = item.item
  }

  return (
    <>
      {item && item.item ? (
        <Wrapper>
          <ItemImage src={product.imageSrc} />
          <ItemInfo>
            <h2>{product.name}</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
            <Link to={`/items/companyId=${product.companyId}`}>{product.companyId}</Link>
            <p>amount in stock: {product.numInStock}</p>
          </ItemInfo>
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
    display: flex;

`;

const ItemImage = styled.img`

`;

const ItemInfo = styled.div`

`;