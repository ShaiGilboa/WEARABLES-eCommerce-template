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
        if(userInfo.fname)setFname(userInfo.fname)
        if(userInfo.lname)setLname(userInfo.lname)
        if(userInfo.email)setEmail(userInfo.email)
      }
    },[userInfo])

  
    if(formNumber===1) {
      return (
        <Wrapper onSubmit={(event)=>event.preventDefault()}>
          <div>userInfo</div>
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
          <label htmlFor='email'>email:</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='email@address.com'
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            ></input>
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
  border-radius:10px;
  background-color: white;
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