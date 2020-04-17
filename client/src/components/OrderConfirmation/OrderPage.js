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
} from '../../Redux/actions';

const OrderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector(state=>state.userInfo);

  const {
    shippingAddress,
    billingInfo,
  } = userInfo.userInfo

  const sendOrder =() => {
    dispatch(changeStatus('purchasing'));
    const {
      fname,
      lname,
      email,
      id,
    } = userInfo.userInfo;
    const orders = cartIds.map(itemId=> ({itemId:parseInt(itemId), numOrdered: cartById[itemId].quantity}))
    const body ={
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
            "Accept" : "application/json"
        },
    })
    .then(res=>res.json())
    .then(res=>{
      //clear cart
      //send to order confirmed with ID
      //keep id in user info
      console.log('res',res)
    })
  }


  const lastThreeDigitsOfCardNumber = billingInfo.cardNumber.substr(billingInfo.cardNumber.length - 3);
  const cartById = userInfo.cart;
  const cartIds = Object.keys(cartById);
  return (
    <Wrapper>
    <h2>Order Summary</h2>
    <div>
      <h3>Sent To:</h3>
      <p>Name: {shippingAddress.fname} {shippingAddress.lname}</p>
      <p>Address: {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.province}</p>
      <p>Phone Number: {shippingAddress.phoneNumber}</p>
    </div>
    <div>
      <h3>Billing Info:</h3>
      <p>Name: {billingInfo.fname} {billingInfo.lname}</p>
      <p>Address: {billingInfo.address}, {billingInfo.city}, {billingInfo.postalCode}</p>
      <p>Card Number ending in: {lastThreeDigitsOfCardNumber}</p>
    </div>
    <button
      onClick={()=>{
        // dispatch(changeStatus('purchasing'))
        history.push('/checkout');
        }}
    > would you like to make a change? </button>
    <button
      onClick={()=>sendOrder()}
    > confirm purchase </button>
    </Wrapper>
  );
}

export default OrderPage;

const Wrapper = styled.div`

`;