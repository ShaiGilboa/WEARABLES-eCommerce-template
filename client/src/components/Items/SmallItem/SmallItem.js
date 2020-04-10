import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../UnstyledButton';

import {
    addItemToCart,
} from '../../../Redux/actions';

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
            <Button
                onClick={()=>dispatch(addItemToCart(item))}
            > add to cart </Button>
        </Wrapper>
    );
}

export default SmallItem;

const Wrapper = styled.div`
    display: flex;
    width: 70vw;
    margin: 0 auto;
`;

const ItemImage = styled.img`

`;

const ItemInfo = styled.div`

`;