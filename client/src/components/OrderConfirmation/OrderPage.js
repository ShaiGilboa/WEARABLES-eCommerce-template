import React from 'react';
import styled from 'styled-components';

import {
  useHistory,
} from 'react-router-dom';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  changeStatus,
  removeItemFromCart,
  addtoPuschaseHistory
} from '../../Redux/actions';

const OrderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  const {
    shippingAddress,
    billingInfo,
  } = userInfo.userInfo

  const sendOrder = () => {
    dispatch(changeStatus('purchasing'));
    const {
      fname,
      lname,
      email,
      id,
    } = userInfo.userInfo;
<<<<<<< Updated upstream
    const orders = cartIds.map(itemId => ({ itemId: parseInt(itemId), numOrdered: cartById[itemId].quantity }))
    const body = {
=======
    const orders = cartIds.map(itemId=> ({itemId:parseInt(itemId), numOrdered: cartById[itemId].quantity}))
    const body ={
>>>>>>> Stashed changes
      orders, //array of objects{'itemId', 'numOrdered'}
      orderInfo: {
        userInfo: {
          fname,
          lname,
          email,
          id,
        },
        shippingAddress,
        billingInfo,
      }
    }
    fetch('/checkout', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(res => res.json())
      .then(payload => {
        dispatch(addtoPuschaseHistory(payload.orderId))
        history.push(`/order-success/${payload.orderId}`)
        //create action clear cart
        //send to order confirmed with ID
        //keep id in user info
        console.log('res', payload)
      })
  }


  const lastThreeDigitsOfCardNumber = billingInfo.cardNumber.substr(billingInfo.cardNumber.length - 3);
  const cartById = userInfo.cart;
  const cartIds = Object.keys(cartById);
  return (
    <Wrapper data-css='form-wrapper'>
      <h2>Order Summary</h2>
      <WrapperInfo>
        <Info>
          <h3>Sent To:</h3>
          <FlexBox>
            <p>Name:</p>
            <h5>{shippingAddress.fname} {shippingAddress.lname}</h5>
          </FlexBox>
          <FlexBox>
            <p>Address:</p>
            <h5>{shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.province}</h5>
          </FlexBox>
          <FlexBox>
            <p>Phone Number:</p>
            <h5>{shippingAddress.phoneNumber}</h5>
          </FlexBox>
        </Info>
        <Info>
          <h3>Billing Info:</h3>
          <FlexBox>
            <p>Name:</p>
            <h5>{billingInfo.fname} {billingInfo.lname}</h5>
          </FlexBox>
          <FlexBox>
            <p>Address:</p>
            <h5>{billingInfo.address}, {billingInfo.city}, {billingInfo.postalCode}</h5>
          </FlexBox>
          <FlexBox>
            <p>Card Number ending in: </p>
            <h5>{lastThreeDigitsOfCardNumber}</h5>
          </FlexBox>
        </Info>
      </WrapperInfo>
      <WrapperButton>
        <FormButton
          onClick={() => {
            // dispatch(changeStatus('purchasing'))
            history.push('/checkout');
          }}
        > would you like to make a change? </FormButton>
        <FormButton
          onClick={() => sendOrder()}
        > confirm purchase </FormButton>
      </WrapperButton>
    </Wrapper>

  );
}

export default OrderPage;

const Wrapper = styled.form`

 border: 1px solid #e6ecf0;
 margin: 60px;
 padding: 30px;
 height: calc(100vh - 400px);
 h2{
   padding-bottom: 30px;
   font-size: 1.2em;


 }
`;

const WrapperInfo = styled.div`
display: flex;

@media(max-width: 1120px){
  flex-direction: column;
}
`
const Info = styled.div`
width: 50%;
@media(max-width: 1120px){
  width: 100%;
}
h3{
 padding-bottom: 15px;
}
p{
  width: 120px;
}
`
const FlexBox = styled.div`
display: flex;
margin-bottom: 10px;
h5{
  font-size: 1em;
  font-weight: 400;

}
`

const WrapperButton = styled.div`
display: flex;
justify-content: space-between;
`;

const FormButton = styled.button`
outline: none;
background-color: red;
color: white;
padding: 10px 30px;
border: 1px solid white;
font-size: 1em;
margin-top: 30px;
cursor: pointer;
border-radius: 4px;
`;