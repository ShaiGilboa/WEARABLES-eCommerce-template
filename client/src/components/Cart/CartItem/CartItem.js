import React from "react";
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';
import { useHistory } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {
  changeQuantityOfItem,
  removeItemFromCart,
  addItemToCart,
  removeOneItemFromCart,
} from '../../../Redux/actions';

const CartItem = ({ item, toggle }) => {
  const {
    _id,
    name,
    price,
    quantity,
    imageSrc,
    numInStock,
  } = item;
  const [longFormOfNameFlag, setLongFormOfNameFlag] = React.useState(false);
  const [outOfStock, setOutOfStock] = React.useState(false);
  const [zeroInCartFlag, setZeroInCartFlag] = React.useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  React.useEffect(() => {
    console.log('quantity',quantity)
    console.log('numInStock',numInStock)
    console.log('zeroInCartFlag',zeroInCartFlag)
    if(quantity === numInStock) {setOutOfStock(true)}
    else {setOutOfStock(false)}
    if(quantity === 0) {setZeroInCartFlag(true)}
    else {setZeroInCartFlag(false)}
  },[quantity])

  const handleAddItem = () => {
    if (quantity < numInStock){ dispatch(addItemToCart(item))}
  }
  const handleRemoveItem = () => {
    if (quantity >= 0) {dispatch(removeOneItemFromCart(item))}
  }
  const handleInput = (event) => {
    if (event.target.value >= 0 && event.target.value <= numInStock) {
      dispatch(changeQuantityOfItem(_id, Number(event.target.value)));
    }
    else {
      dispatch(changeQuantityOfItem(_id, Number(numInStock)));
    }
  }

  const handleClickOnItem = (ev, _id) => {
    ev.preventDefault();
    ev.stopPropagation();
    // toggle only comes form the cart modal, so if we have it, and the name was clicked, we should toggle the cart modal
    if (toggle) toggle();
    history.push(`/items/${_id}`);
  }

  return (
    <Wrapper>
      <div data-css='WrapperImage'>
        <ThumbCart src={imageSrc} alt={name} />
      </div>
      <WrapperInfo data-css='WrapperInfo'>
        <Name
          onClick={(event) => handleClickOnItem(event, _id)}
          long={longFormOfNameFlag ? true : false}
        >
          <h2>{name}</h2>
        </Name>
        <p>{price}</p>
        <ItemQuantityWrapper data-css='ItemQuantityWrapper'>
          {zeroInCartFlag 
            ? <Gap/>
            : <RemoveCircleOutlineIcon
            style={{ fontSize: 15, cursor: 'pointer' }}
            onClick={() => handleRemoveItem()}
          />}

          <ItemQuantityInput
            value={quantity}
            onChange={(event) => handleInput(event)}
          />

            {!outOfStock && <AddCircleOutlineIcon
              style={{ fontSize: 15, cursor: 'pointer' }}
              // onClick={() => dispatch(addItemToCart(item))}
              onClick={() => handleAddItem()}
            />}

        </ItemQuantityWrapper>
        <RemoveButton onClick={() => {
          console.log('_id',_id)
          dispatch(removeItemFromCart(_id))}} />
      </WrapperInfo>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.div`
margin-top: 10px;
display: flex;
margin-bottom: 15px;
`;

const RemoveButton = styled(CancelIcon)`
cursor: pointer;
position: absolute;
top:-10px;
right: -10px;
color: black;
transition: all .2s ease-in;
  &:hover{
    color: red;
  }
`

const Name = styled.div`
margin-bottom: 7px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  h2{
    ${props => props.long ? null : (
    `overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      `
  )}
  }
`;
const Gap = styled.div`
  width: 15px;
`
const WrapperInfo = styled.div`
  width: 430px;
  height: 100px;
  border: 1px solid #e6ecf0;
  padding: 15px;
  position: relative;
  p{
    margin-bottom: 7px;
  }
`
const ItemQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ThumbCart = styled.img`
width: 100px;
height: 100px;
border: 1px solid #e6ecf0;
border-right: none;
padding: 15px;
`

const ItemQuantityInput = styled.input`
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 700;
  width: 30px;
  text-align: center;
  margin: 0 5px;
`;