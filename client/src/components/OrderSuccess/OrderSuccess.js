import React from 'react';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import Shai from '../assets/_shai.png'
import Angelo from '../assets/_angelo.png'
import Dom from '../assets/_dom.png'

const OrderSuccess = () => {
  

  const { orderId } = useParams();
  console.log(orderId);
  return (
    <>
    <Wrapper>
      <div>
      <h2>Thank you for your purshase with the S.A.D. team</h2>

        <div>
          <Avatar src={Shai} alt="Dom"/>
          <Avatar src={Angelo} alt="Dom"/>
          <Avatar src={Dom} alt="Dom"/>
        </div>
        <h3>Here is you confirmation number: <span style={{fontWeight: '700'}}> {orderId}</span></h3>
        <Link to = '/'>
        <FormButton>
        Back to Home page
      </FormButton>
      </Link>
      </div>

    </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
  width: calc(100vw - 120px);
  height: calc(100vh - 400px);
  border: 1px solid #e6ecf0;
  div{
    text-align: center;
      h2{
        padding-bottom: 12px;
        font-weight: 400;
      }
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px;
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

export default OrderSuccess;
