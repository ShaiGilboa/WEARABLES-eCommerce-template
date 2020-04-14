import React from 'react';
import styled from 'styled-components';

import UserInfoForm from './UserInfoForm';
import ShippingAddressForm from './ShippingAddressForm';
import BillingForm from './BillingForm';
import Button from '../../UnstyledButton';

const Form = ({
  formNumber,
  setFormNumber,
}) => {
  console.log('number',formNumber);
  
  return (
    <Wrapper>
      <UserInfoForm 
      formNumber={formNumber}
      />
      <ShippingAddressForm
      formNumber={formNumber}
      />
      <BillingForm
      formNumber={formNumber}
      />
      <Buttons>
        {formNumber>1 && <PreviousBtn
          onClick={()=>setFormNumber(formNumber-1)}
        >Previous</PreviousBtn>}
        {formNumber<3 && <NextBtn
          type={"submit"}
          onSubmit={(event)=>{event.preventDefault();setFormNumber(formNumber+1)}}
        >Next</NextBtn>}
      </Buttons>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.form`
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