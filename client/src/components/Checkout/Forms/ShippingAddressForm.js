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
    const [province, setProvince] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const handleSubmit = () => {
      console.log('submit')
      const newUserInfo = {
        ...userInfo,
        shippingAddress: {
          fname,
          lname,
          address,
          city,
          province,
          postalCode,
          phoneNumber,
        }
      }
      validateForm('Shipping-Address', newUserInfo);
      setFormNumber(formNumber+1)
    }

    React.useEffect(()=>{
      if(userInfo){
        if(userInfo.shippingAddress){
          if(userInfo.shippingAddress.fname)setFname(userInfo.shippingAddress.fname)
          if(userInfo.shippingAddress.lname)setLname(userInfo.shippingAddress.lname)
          if(userInfo.shippingAddress.address)setAddress(userInfo.shippingAddress.address)
          if(userInfo.shippingAddress.city)setCity(userInfo.shippingAddress.city)
          if(userInfo.shippingAddress.province)setProvince(userInfo.shippingAddress.province)
          if(userInfo.shippingAddress.postalCode)setPostalCode(userInfo.shippingAddress.postalCode)
          if(userInfo.shippingAddress.phoneNumber)setPhoneNumber(userInfo.shippingAddress.phoneNumber)
        }
      }
    },[userInfo])

    if(formNumber===2){
      return (
        <Wrapper onSubmit={(event)=>event.preventDefault()}>
          <h2>Shipping Address:</h2>
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
            <label htmlFor='province'>Province:</label>
            <select
              defaultValue={province}
              onChange={(event)=>setProvince(event.target.value)}
              >
              <option value="" disabled hidden>Choose here</option>
              <option value="qc">QC</option>
              <option value="on">ON</option>
            </select>
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
    }else {
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