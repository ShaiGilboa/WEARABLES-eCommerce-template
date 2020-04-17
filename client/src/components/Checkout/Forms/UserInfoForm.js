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
  const [email, setEmail] = useState('');

  const [inputProblem, setInputProblem] = useState(false);

  const handleSubmit = () => {
    const newUserInfo = {
      ...userInfo,
      fname,
      lname,
      email,
    }
    const validationResponse = validateForm('Personal-Information', newUserInfo)
    if (validationResponse) {
      const validationResponseString = validationResponse.join(', ')
      setInputProblem('it seems that there is a problem with: ' + validationResponseString)
    } else {
      setInputProblem(false)
      setFormNumber(formNumber + 1)
    }
  }

  React.useEffect(() => {
    if (userInfo) {
      if (userInfo.fname) setFname(userInfo.fname)
      if (userInfo.lname) setLname(userInfo.lname)
      if (userInfo.email) setEmail(userInfo.email)
    }
  }, [userInfo])


  if (formNumber === 1) {
    return (
      <Wrapper onSubmit={(event) => event.preventDefault()}>
        <div>
          <h2>Order Information</h2>
        </div>
        <FieldWrapper>
          <FieldName htmlFor='fname'>First Name</FieldName>
          <FieldInput
            type='text'
            id='fname'
            name='fname'
            placeholder='First Name'
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FieldName htmlFor='lname'>Last Name</FieldName>
          <FieldInput
            type='text'
            id='lname'
            name='lname'
            placeholder='Last Name'
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper>
        <FieldName htmlFor='email'>Email</FieldName>
        <FieldInput
          type='text'
          id='email'
          name='email'
          placeholder='email@address.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </FieldWrapper>
        <WrapperButton>
        <FormButton type="submit" id="submit-form"
          onClick={(event) => {
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
justify-content: flex-end;
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