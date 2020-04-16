import React from 'react';
import styled from 'styled-components';
import {
  useDispatch,
} from 'react-redux';

import {
  updateUserInfo,
} from '../../../Redux/actions';

import {
  validateEmail,
  validateAddress,
  validatePostalCode,
  validateOnlyDigits,
  validateOnlyLetters,
  validateCreditCard,
} from '../../../utils';

import UserInfoForm from './UserInfoForm';
import ShippingAddressForm from './ShippingAddressForm';
import BillingForm from './BillingForm';
import Button from '../../UnstyledButton';

const Form = ({
  userInfo,
}) => {
  
  const dispatch = useDispatch();

  const [formNumber, setFormNumber] = React.useState(1);


  const validateForm = (type, data) => {
    let newUserInfo = JSON.parse(JSON.stringify(userInfo));
    let inputProblems = []
    switch (type) {
      case 'Personal-Information':
        if(data.fname.length===0)inputProblems = inputProblems.concat(['First Name'])
        if(data.lname.length===0)inputProblems = inputProblems.concat(['Last Name'])
        if(!validateEmail(data.email))inputProblems = inputProblems.concat(['Email'])
          
        if(inputProblems.length){
          return inputProblems
        } else {
          newUserInfo = {
            ...newUserInfo,
            fname: data.fname,
            lname: data.lname,
            email: data.email,
          };
          dispatch(updateUserInfo(newUserInfo))
          return false;
        }
      break;
      case 'Shipping-Address':
        if(data.shippingAddress.fname.length===0)inputProblems = inputProblems.concat(['First Name'])
        if(data.shippingAddress.lname.length===0)inputProblems = inputProblems.concat(['Last Name'])
        if(!validateAddress(data.shippingAddress.address))inputProblems = inputProblems.concat(['Address'])
        if(!validateOnlyLetters(data.shippingAddress.city) || data.shippingAddress.city.length===0)inputProblems = inputProblems.concat(['City'])
        if(data.shippingAddress.province !=='on' && data.shippingAddress.province !=='qc')inputProblems = inputProblems.concat(['Province'])
        if(!validatePostalCode(data.shippingAddress.postalCode))inputProblems = inputProblems.concat(['Postal Code'])
        if(!validateOnlyDigits(data.shippingAddress.phoneNumber) || data.shippingAddress.phoneNumber.length!==10)inputProblems = inputProblems.concat(['Phone Number'])
        if(inputProblems.length){
          return inputProblems;
        } else {
          newUserInfo = {
            ...newUserInfo,
            shippingAddress: data.shippingAddress,
          }
          dispatch(updateUserInfo(newUserInfo))
        }
      break;
      case 'Billing-info':
        if(data.billingInfo.fname.length===0)inputProblems = inputProblems.concat(['First Name'])
        if(data.billingInfo.lname.length===0)inputProblems = inputProblems.concat(['Last Name'])
        if(!validateAddress(data.billingInfo.address))inputProblems = inputProblems.concat(['Address'])
        if(!validateOnlyLetters(data.billingInfo.city) || data.billingInfo.city.length===0)inputProblems = inputProblems.concat(['City'])
        // if(data.billingInfo.province.length!=='on' || data.shippingAddress.province.length!=='qc')inputProblems = inputProblems.concat(['Email'])
        if(!validatePostalCode(data.billingInfo.postalCode))inputProblems = inputProblems.concat(['Postal Code'])
        if(!validateCreditCard(data.billingInfo.cardNumber))inputProblems = inputProblems.concat(['Phone Number'])
        if(inputProblems.length){
          return inputProblems;
        } else {
          newUserInfo = {
            ...newUserInfo,
            billingInfo: data.billingInfo,
          }
          dispatch(updateUserInfo(newUserInfo))
        }
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