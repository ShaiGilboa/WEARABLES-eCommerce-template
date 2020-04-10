import React from "react";
import styled from 'styled-components';
import Typeahead from '../Typeahead';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
const Navbar = () => {
  return (
    <>
      <Wrapper data-css='Wrapper'>
        <ContainerLeft data-css='ContainerLeft'>
          <p style={{fontSize: '2em'}}>S.A.D. WEARABLES</p>
          
        </ContainerLeft>
        <ContainerRigth data-css='ContainerRigth'>
        <div>
            <Typeahead />
          </div>
          <IconNav data-css='IconNav'>
            <LanguageOutlinedIcon />
          </IconNav >
          <IconNav data-css='IconNav'><AccountCircleOutlinedIcon /></IconNav>
          <IconNav data-css='IconNav'><ShoppingCartOutlinedIcon /></IconNav>
        </ContainerRigth>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0 20px 30px;
width: 100vw;
height: 80px;
/* background-color: var(--global-color-secondary); */
border-bottom: 1px solid #e6ecf0;
`;
const IconNav = styled.div`
  padding: 0 30px;
  border-left: 1px solid #e6ecf0;
  height: 80px;
  display: flex;
  align-items: center;
  cursor:pointer;
  transition: all .2s ease-in;
    &:hover{
      background-color: #F4F7F6;
    }
`;

const ContainerLeft = styled.div`
display: flex;
align-items: center;
`;
const ContainerRigth = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
`;

export default Navbar;
