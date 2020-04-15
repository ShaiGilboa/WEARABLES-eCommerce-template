import React from 'react';
import bannerEcomm from '../assets/bannerEcomm.jpg';
import bannerEcomm2 from '../assets/bannerEcomm2.jpg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BannerPromo = () => {
  return (
  <Wrapper data-css='WrapperBannerPromo'>
      <p>Let's stay connected, and active.</p>
      <Link to='/items'>
      <BtnPromo
        data-css='BtnPromo'
      >Browse all our items
      </BtnPromo>
      </Link>
  </Wrapper>

  );
};

const Wrapper = styled.div`
  margin: 30px;
  height: 500px;
  background-image: url(${bannerEcomm2});
  /* background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) */
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
      padding-bottom: 20px;
    }
`;

const BtnPromo = styled.button`
  background-color: Transparent;
  color: white;
  padding: 10px 30px;
  border: 1px solid white;
  font-size: 1.2em;
  margin-top: 20px;
  cursor: pointer;
  transition: all .2s ease-in;
    &:hover{
      background-color: white;
      border: 1px solid white;
      color: black;
    }
`

export default BannerPromo;
