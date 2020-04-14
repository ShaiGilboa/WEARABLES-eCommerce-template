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
      {formNumber>1 && <PreviousBtn
        onClick={()=>setFormNumber(formNumber-1)}
      >Previous</PreviousBtn>}
      {formNumber<3 && <NextBtn
        onClick={()=>setFormNumber(formNumber+1)}
      >Next</NextBtn>}
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div`
  width: 100%;
`;

const NextBtn = styled(Button)`

`;

const PreviousBtn = styled(Button)`

`;