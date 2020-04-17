import React, {
  useState,
} from 'react';
import styled from 'styled-components';

import {
  useHistory,
} from 'react-router-dom';

import {
  useDispatch,
} from "react-redux";

import {
  changeStatus,
} from '../../../Redux/actions';

import Button from '../../UnstyledButton';

const Form = ({
  formNumber,
  setFormNumber,
  userInfo,
  validateForm,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  // const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [inputProblem, setInputProblem] = useState(false);

  const handleSubmit = () => {
    const newUserInfo = {
      ...userInfo,
      billingInfo: {
        fname,
        lname,
        address,
        city,
        // province,
        postalCode,
        cardNumber,
      }
    }
    const validationResponse = validateForm('Billing-info', newUserInfo);
    if (validationResponse) {
      const validationResponseString = validationResponse.join(', ')
      setInputProblem('it seems that there is a problem with: ' + validationResponseString)
    } else {
      setInputProblem(false)
      dispatch(changeStatus('order-confirmation'))
      history.push('/order-confirmation')
    }
  }

  const [btnDisplay, setBtnDisplay] = React.useState('block')
  const sameAsShipping = () => {
    if (userInfo) {
      if (userInfo.shippingAddress) {
        if (userInfo.shippingAddress.fname) setFname(userInfo.shippingAddress.fname)
        if (userInfo.shippingAddress.lname) setLname(userInfo.shippingAddress.lname)
        if (userInfo.shippingAddress.address) setAddress(userInfo.shippingAddress.address)
        if (userInfo.shippingAddress.city) setCity(userInfo.shippingAddress.city)
        // if(userInfo.shippingAddress.province)setProvince(userInfo.shippingAddress.province)
        if (userInfo.shippingAddress.postalCode) setPostalCode(userInfo.shippingAddress.postalCode)
      }
    }
    setBtnDisplay('none')
  }
  React.useEffect(() => {
    if (userInfo) {
      if (userInfo.billingInfo) {
        if (userInfo.billingInfo.fname) setFname(userInfo.billingInfo.fname)
        if (userInfo.billingInfo.lname) setLname(userInfo.billingInfo.lname)
        if (userInfo.billingInfo.address) setAddress(userInfo.billingInfo.address)
        if (userInfo.billingInfo.city) setCity(userInfo.billingInfo.city)
        // if(userInfo.billingInfo.province)setProvince(userInfo.billingInfo.province)
        if (userInfo.billingInfo.postalCode) setPostalCode(userInfo.billingInfo.postalCode)
        if (userInfo.billingInfo.cardNumber) setCardNumber(userInfo.billingInfo.cardNumber)
      }
    }
  }, [userInfo])
  if (formNumber === 3) {
    return (
      <Wrapper onSubmit={(event) => event.preventDefault()}>
        <div>
          <h2>Billing Address:</h2>
        </div>
        <div>
        <FormButton style={{marginBottom: '30px'}}
          onClick={() => sameAsShipping()}
        // style={{display: btnDisplay}}
        >Same as shipping?
        </FormButton>
        </div>
        <FieldWrapper>
          <FieldName htmlFor='fname'>First Name:</FieldName>
          <FieldInput
            type='text'
            id='fname'
            name='fname'
            placeholder='First Name'
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          ></FieldInput>
        </FieldWrapper>
        <FieldWrapper>
          <FieldName htmlFor='lname'>Last Name:</FieldName>
          <FieldInput
            type='text'
            id='lname'
            name='lname'
            placeholder='Last Name'
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          ></FieldInput>
        </FieldWrapper>
        <FieldWrapper>
          <FieldName htmlFor='address'>Address:</FieldName>
          <FieldInput
            type="text"
            placeholder="street-name house-number"
            id="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          >
          </FieldInput>
        </FieldWrapper>
        <FieldWrapper>
          <FieldName htmlFor='city'>City:</FieldName>
          <FieldInput
            type="text"
            placeholder="city"
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
          </FieldInput>
        </FieldWrapper>
        <FieldWrapper>
          <FieldName htmlFor='postal-code'>Postal Code:</FieldName>
          <FieldInput
            type="text"
            placeholder="XXX XXX"
            id="postalCode"
            name="postal-code"
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
          >
          </FieldInput>
        </FieldWrapper>
        {/* <label htmlFor='province'>Province:</label>
            <select
              defaultValue={province}
              onChange={(event)=>setProvince(event.target.value)}
              >
              <option value="" disabled hidden>Choose here</option>
              <option value="qc">QC</option>
              <option value="on">ON</option>
            </select> */}
          <FieldWrapper>
        <FieldName htmlFor='card-number'>Card Number:</FieldName>
        <FieldInput
          type="text"
          placeholder="XXX XXX"
          id="cardNumber"
          name="card-number"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        >
        </FieldInput>
        </FieldWrapper>
        <WrapperButton>
      <FormButton
        type="button"
        onClick={() => setFormNumber(formNumber - 1)}
      >previous</FormButton>
      <FormButton type="submit" id="submit-form"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >Confirm</FormButton>
      </WrapperButton>
        {
      inputProblem && (<div>
        <Problem>{inputProblem}</Problem>
      </div>)
    }
      </Wrapper>
    );
  } else {
  return null
}
}

export default Form;

const Wrapper = styled.form`
 display: flex;
 flex-direction: column;
 border: 1px solid #e6ecf0;
 padding: 30px;
 h2{
   /* padding-bottom: 30px; */
   font-size: 1.2em;
 }
`;

const FieldWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`
const FieldName = styled.label`
width: 100px;
`;

const FieldInput = styled.input`
  width: 200px;
  border: none;
  outline: none;
  background-color: #F4F7F6;
  border-radius: 4px;
  padding: 10px;

`;

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
const Problem = styled.h4`
font-weight: 400;
font-size: .8em;
margin-top: 20px;
`;