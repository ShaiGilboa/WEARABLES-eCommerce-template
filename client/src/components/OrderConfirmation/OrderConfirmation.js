import React from 'react';
import styled from 'styled-components';

import {
  useHistory,
} from 'react-router-dom';

import {
  useSelector,
} from 'react-redux';

import OrderPage from './OrderPage';

const OrderConfirmation = () => {
  const history = useHistory();
  const userInfo = useSelector(state=>state.userInfo)
  if(userInfo.status==='order-confirmation'){
    return <OrderPage />
  } else {
    return <div>no order found</div>
  }
}

export default OrderConfirmation;
