import React, {
  useState,
} from 'react';
import styled from 'styled-components';

// import Button from '../../UnstyledButton';

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
      if(phoneNumberString){
        const RegexNumberExtractor = /\d+/g;
        const justNumberFromString = phoneNumberString.match(RegexNumberExtractor).join('')
        setPhoneNumber(justNumberFromString);
      } else {
        setPhoneNumber('');
      }
    }

    const handleSubmit = () => {
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
          <div>
          <h2>Shipping Address:</h2>
          </div>
          <FieldWrapper>
            <FieldName htmlFor='fname'>First Name:</FieldName>
            <FieldInput
              type='text'
              id='fname'
              name='fname'
              placeholder='First Name'
              value={fname}
              onChange={(event)=>setFname(event.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper>
            <FieldName htmlFor='lname'>Last Name:</FieldName>
            <FieldInput
              type='text'
              id='lname'
              name='lname'
              placeholder='Last Name'
              value={lname}
              onChange={(event)=>setLname(event.target.value)}
              />
              </FieldWrapper>
              <FieldWrapper>
              <FieldName htmlFor='phone-number'>Phone Number:</FieldName>
              <FieldInput
                type='number'
                id='phoneNumber'
                name='phone-number'
                placeholder='+1(XXX) XXX-XXXX'
                value={phoneNumber}
                onChange={(event)=>inputPhoneNumber(event)}
              />
              </FieldWrapper>
              <FieldWrapper>
          <FieldName htmlFor='address'>Address:</FieldName>
          <FieldInput
          type="text"
          placeholder="street-name house-number"
          id="address"
          name="address"
          value={address}
          onChange={(event)=>setAddress(event.target.value)}
          />
          </FieldWrapper>
          <FieldWrapper>
            <FieldName htmlFor='city'>City:</FieldName>
            <FieldInput
            type="text"
            placeholder="city"
            id="city"
            name="city"
            value={city}
            onChange={(event)=>setCity(event.target.value)}
            />
            </FieldWrapper>
            <FieldWrapper>
            <FieldName htmlFor='postal-code'>Postal Code:</FieldName>
            <FieldInput
            type="text"
            placeholder="XXX XXX"
            id="postalCode"
            name="postal-code"
            value={postalCode}
            onChange={(event)=>setPostalCode(event.target.value)}
            />
            </FieldWrapper>
            <FieldWrapper>
            <FieldName htmlFor='province'>Province:</FieldName>
            <select
              defaultValue={province}
              onChange={(event)=>setProvince(event.target.value)}
              >
              <option value="" disabled hidden>Choose here</option>
              <option value="qc">QC</option>
              <option value="on">ON</option>
            </select>
            </FieldWrapper>
            <WrapperButton>
          <FormButton
            type="button"
            onClick={()=>setFormNumber(formNumber-1)}
          >previous</FormButton>
          <FormButton type="submit" id="submit-form"
            onClick={(event)=>{
              event.preventDefault();
              handleSubmit();
              }}
          >Next</FormButton>
           </WrapperButton>
          {inputProblem && (<div>
              <Problem>{inputProblem}</Problem>
              </div>)}
        </Wrapper>
      );
    }else {
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
   padding-bottom: 30px;
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