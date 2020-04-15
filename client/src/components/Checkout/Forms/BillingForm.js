import React from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({
  formNumber,
  setFormNumber,
  userInfo,
  validateForm,
  }) => {
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    // const [province, setProvince] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    
    const handleSubmit = () => {
      console.log('submit')
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
      validateForm('Billing-info', newUserInfo);
      setFormNumber(formNumber+1);
    }

    const [btnDisplay, setBtnDisplay] = React.useState('block')
    const sameAsShipping = () => {
      if(userInfo){
        if(userInfo.shippingAddress){
          if(userInfo.shippingAddress.fname)setFname(userInfo.shippingAddress.fname)
          if(userInfo.shippingAddress.lname)setLname(userInfo.shippingAddress.lname)
          if(userInfo.shippingAddress.address)setAddress(userInfo.shippingAddress.address)
          if(userInfo.shippingAddress.city)setCity(userInfo.shippingAddress.city)
          // if(userInfo.shippingAddress.province)setProvince(userInfo.shippingAddress.province)
          if(userInfo.shippingAddress.postalCode)setPostalCode(userInfo.shippingAddress.postalCode)
        }
      }
      setBtnDisplay('none')
    }
    React.useEffect(()=>{
      if(userInfo) {
        if(userInfo.billingInfo){
          if(userInfo.billingInfo.fname)setFname(userInfo.billingInfo.fname)
          if(userInfo.billingInfo.lname)setLname(userInfo.billingInfo.lname)
          if(userInfo.billingInfo.address)setAddress(userInfo.billingInfo.address)
          if(userInfo.billingInfo.city)setCity(userInfo.billingInfo.city)
          // if(userInfo.billingInfo.province)setProvince(userInfo.billingInfo.province)
          if(userInfo.billingInfo.postalCode)setPostalCode(userInfo.billingInfo.postalCode)
          if(userInfo.billingInfo.cardNumber)setCardNumber(userInfo.billingInfo.cardNumber)
        }
      }
    },[userInfo])
  if(formNumber===3){
    return (
      <Wrapper onSubmit={(event)=>event.preventDefault()}>
          <h2>Billing Address:</h2>
          <button
            onClick={()=>sameAsShipping()}
            // style={{display: btnDisplay}}
          >Same as shipping?</button>
          <div>
            <label htmlFor='fname'>First Name:</label>
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='First Name'
              value={fname}
              onChange={(event)=>setFname(event.target.value)}
              ></input>
              <label htmlFor='lname'>Last Name:</label>
            <input
              type='text'
              id='lname'
              name='lname'
              placeholder='Last Name'
              value={lname}
              onChange={(event)=>setLname(event.target.value)}
              ></input>
          </div>
          <label htmlFor='address'>Address:</label>
          <input
          type="text"
          placeholder="street-name house-number"
          id="address"
          name="address"
          value={address}
          onChange={(event)=>setAddress(event.target.value)}
          >
          </input>
          <div>
            <label htmlFor='city'>City:</label>
            <input
            type="text"
            placeholder="city"
            id="city"
            name="city"
            value={city}
            onChange={(event)=>setCity(event.target.value)}
            >
            </input>
            <label htmlFor='postal-code'>Postal Code:</label>
            <input
            type="text"
            placeholder="XXX XXX"
            id="postalCode"
            name="postal-code"
            value={postalCode}
            onChange={(event)=>setPostalCode(event.target.value)}
            >
            </input>
            {/* <label htmlFor='province'>Province:</label>
            <select
              defaultValue={province}
              onChange={(event)=>setProvince(event.target.value)}
              >
              <option value="" disabled hidden>Choose here</option>
              <option value="qc">QC</option>
              <option value="on">ON</option>
            </select> */}
            <label htmlFor='card-number'>Card Number:</label>
            <input
            type="text"
            placeholder="XXX XXX"
            id="cardNumber"
            name="card-number"
            value={cardNumber}
            onChange={(event)=>setCardNumber(event.target.value)}
            >
            </input>
          </div>
          <button
            type="button"
            onClick={()=>setFormNumber(formNumber-1)}
          >previous</button>
          <button type="submit" id="submit-form"
            onClick={(event)=>{
              event.preventDefault();
              handleSubmit();
              }}
          >Next</button>
        </Wrapper>
    );
  } else {
    return null
  }
}

export default Form;

const Wrapper = styled.form`

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