import React from 'react';
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';

import {
  updateUserInfo,
} from '../../../Redux/actions';

import UserInfoForm from './UserInfoForm';
import ShippingAddressForm from './ShippingAddressForm';
import BillingForm from './BillingForm';
import CheckInformation from './CheckInformation';
import Button from '../../UnstyledButton';

const Form = ({
  formNumber,
  setFormNumber,
  userInfo,
}) => {
  
  const dispatch = useDispatch();

  const validateForm = (type, data) => {
    console.log('validateForm', data)
    let newUserInfo = JSON.parse(JSON.stringify(userInfo));
    console.log('newUserInfo', newUserInfo);
    switch (type) {
      case 'Personal-Information':
        newUserInfo = {
          ...newUserInfo,
          fname: data.fname,
          lname: data.lname,
          email: data.lname,
        };
        console.log('newUserInfo',newUserInfo)
        dispatch(updateUserInfo(newUserInfo))
      break;
      case 'Shipping-Address':
        newUserInfo = {
          ...newUserInfo,
          shippingAddress: data.shippingAddress,
        }
        dispatch(updateUserInfo(newUserInfo))
      break;
      case 'Billing-info':
        newUserInfo = {
          ...newUserInfo,
          billingInfo: data.billingInfo,
        }
        dispatch(updateUserInfo(newUserInfo))
      break;
      default:
      break;
    }

  }


  return (
    <Wrapper>
      <UserInfoForm 
      setFormNumber={setFormNumber}
      formNumber={formNumber}
      userInfo={userInfo}
      validateForm={validateForm}
      />
      <ShippingAddressForm
      setFormNumber={setFormNumber}
      formNumber={formNumber}
      userInfo={userInfo}
      validateForm={validateForm}
      />
      <BillingForm
      setFormNumber={setFormNumber}
      formNumber={formNumber}
      userInfo={userInfo}
      validateForm={validateForm}
      />
      <CheckInformation
        Information={''}
      />
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color:#e6ecf0;
  padding: 15%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

const Buttons = styled.div`
  position: relative;
  /* display: flex;
  justify-content:space-between; */
`;
const NextBtn = styled(Button)`
  position: relative;
  background-color:green;
  right: 40px;
  bottom: 40px;
`;

const PreviousBtn = styled(Button)`
  position: relative;
  background-color:blue;
  left: 40px;
  bottom: 40px;
`;