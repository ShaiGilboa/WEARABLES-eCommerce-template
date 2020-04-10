import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BigItem = ({
    id,
    name,
    price,
    body_location,
    category,
    imageSrc,
    numInStock,
    companyId,
}) => {
    
    return (
        <Wrapper>
            <ItemImage src={imageSrc} />
            <ItemInfo>
                <h2>{name}</h2>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p>{price}</p>
                    <p>{category}</p>
                </div>
                <Link to={`/items/companyId=${companyId}`}>{companyId}</Link>
                <p>amount in stock: {numInStock}</p>
            </ItemInfo>
        </Wrapper>
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