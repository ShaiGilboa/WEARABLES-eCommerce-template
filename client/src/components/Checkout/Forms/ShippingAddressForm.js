import React, {
  useState,
} from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({
  formNumber,
  setFormNumber,
  userInfo,
  validateForm,
  }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // const [phoneNumberString, setPhoneNumberString] = useState('+1 ')
    const [inputProblem, setInputProblem] = useState(false);

    const inputPhoneNumber = (event) => {
      const phoneNumberString = event.target.value;
      const RegexNumberExtractor = /\d+/g;
      const justNumberFromString = phoneNumberString.match(RegexNumberExtractor).join('')
      setPhoneNumber(justNumberFromString);
    }

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
      const validationResponse = validateForm('Shipping-Address', newUserInfo)
      if (validationResponse){
        console.log('resp',validationResponse)
        const validationResponseString = validationResponse.join(', ')
        setInputProblem('it seems that there is a problem with: ' + validationResponseString)
      } else {
        setInputProblem(false)
        setFormNumber(formNumber+1)
      }
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
              <label htmlFor='phone-number'>Phone Number:</label>
              <input
                type='number'
                id='phoneNumber'
                name='phone-number'
                placeholder='+1(XXX) XXX-XXXX'
                value={phoneNumber}
                onChange={(event)=>inputPhoneNumber(event)}
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
          {inputProblem && (<div>
              <h2>{inputProblem}</h2>
              </div>)}
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