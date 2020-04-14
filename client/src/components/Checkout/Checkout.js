import React from "react";
import styled from 'styled-components';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import Forms from './Forms';
import CartItem from './CartItem';
import Cart from '../Cart';
import Button from '../UnstyledButton';

import {
  totalAmount,
} from '../../utils';

const Checkout = () => {
  const dispatch = useDispatch();
  const [formNumber, setFormNumber] = React.useState(1)
  const cart = useSelector(state=>state.userInfo.cart);
  const cartIds = Object.keys(cart);
  const subtotal = totalAmount(cart, cartIds);
  const taxes = Number.parseFloat(subtotal*0.09975).toFixed(2);
  const prices = {
    subtotal,
    discounts: 0,
    shipping: 0,
    taxes, //in QC
  }
  const total = Object.values(prices).reduce((temporarySum, price)=>temporarySum+price*100,0)/100
    {/*check to see if signed in, if not we render a 'sign in' or 'continue as guest' page*/}
  return (
    <Wrapper>
      <Forms formNumber={formNumber} setFormNumber={setFormNumber}/>
      <div>Checkout</div>
      <SummaryContainer>
        <h2>Order Summary</h2>
        <Details>
          <Line>
            <p>Subtotal</p>
            <p>${prices.subtotal}</p>
          </Line>
          <Line>
            <p>discounts</p>
            <p>${prices.discounts}</p>
          </Line>
          <Line>
            <p>Estimated Shipping</p>
            <p>{prices.shipping===0?'FREE':prices.shipping}</p>
          </Line>
          <Line>
            <p>Estimated Taxes</p>
            <p>{prices.taxes}</p>
          </Line>
          <Line>
            <p>total</p>
            <p>{total}</p>
          </Line>
          <ContinueBtn
            disabled={formNumber<3}
            onClick={()=>console.log('hi')}
          >
            Continue
          </ContinueBtn>
        </Details>
      </SummaryContainer>
    </Wrapper>
  );
}

export default Checkout;

const Wrapper = styled.div`
  display: flex;
`;

const SummaryContainer = styled.div`

`;

const FormsContainer = styled.div`
  flex:1;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

const ContinueBtn = styled(Button)`
  width: 100%;
  padding: 5px 10px;
  background-color: red;
`;