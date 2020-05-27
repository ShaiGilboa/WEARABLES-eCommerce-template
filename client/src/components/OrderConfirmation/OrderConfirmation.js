import React from 'react';
// import styled from 'styled-components';
// import OrderSuccess from '../OrderSuccess';
// import {
//   useHistory,
// } from 'react-router-dom';

import {
  useSelector,
} from 'react-redux';

import OrderPage from './OrderPage';

const OrderConfirmation = () => {
  const userInfo = useSelector(state=>state.userInfo)

  if(userInfo.status==='order-confirmation'){
    return <OrderPage />
  } 
  else {
    return <p>Order not found </p>
  }
}

export default OrderConfirmation;
