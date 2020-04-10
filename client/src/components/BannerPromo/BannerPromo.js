import React from 'react';
import bannerEcomm from '../assets/bannerEcomm.jpg';
import bannerEcomm2 from '../assets/bannerEcomm2.jpg';
import styled from 'styled-components';

const BannerPromo = () => {
  return (
  <Wrapper data-css='WrapperBannerPromo'>
      <p>Let's stay connected, and active.</p>
      <BtnPromo
        data-css='BtnPromo'
      >Discover
      </BtnPromo>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 400px;
  background-image: url(${bannerEcomm2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    p{
      color: white;
      font-size: 3em;
    }
`;

const BtnPromo = styled.button`
  background-color: white;
  color: black;
  padding: 10px 30px;
  border-radius: 25px;
  border: none;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color .2s ease-in;
    &:hover{
      background-color: #F4F7F6;
      /* color: black; */
    }
`

export default BannerPromo;
