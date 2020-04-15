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
    const [email, setEmail] = React.useState('');

    const handleSubmit = () => {
      console.log('submit')
      const newUserInfo = {
        ...userInfo,
        fname,
        lname,
        email,
      }
      validateForm('Personal-Information', newUserInfo);
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
            onClick={()=>{
              handleSubmit();
              setFormNumber(formNumber+1)}}
            >Next</button>
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