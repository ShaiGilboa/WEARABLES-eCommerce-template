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

import {
  changeStatus,
} from '../../Redux/actions';

const Checkout = () => {
  const dispatch = useDispatch();
  
  const userInfo = useSelector(state=>state.userInfo.userInfo);

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
      <FormContainer>
      <Forms
        userInfo={userInfo}
      />
      </FormContainer>
      {/* <FormContainer/> */}
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
          <LineTotal>
            <p style={{fontWeight: '700'}}>Total</p>
            <p style={{fontWeight: '700'}}>{total}</p>
          </LineTotal>
          {/* <ContinueBtn
            disabled={formNumber<3}
            onClick={()=>console.log('hi')}
          > */}
            {/* Continue
          </ContinueBtn> */}
        </Details>
      </SummaryContainer>
    </Wrapper>
  );
}

export default Checkout;

const Wrapper = styled.div`
display: flex;
`;
const FormContainer = styled.div`
width:100%;
`

const SummaryContainer = styled.div`
width: 500px;
padding: 60px;
border-left: 1px solid #e6ecf0;
  h2{
    font-size: 1.5em;
    padding-bottom: 30px;
  }

`;

const Line = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom: 15px;
`;
const LineTotal = styled.div`
  display: flex;
  justify-content:space-between;
  border-top: 1px solid #e6ecf0;
  padding-top: 15px;
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