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
         <p style={{fontSize: '2em'}}>WEARABLES</p>
          <div>
            <Typeahead />
          </div>
        </ContainerLeft>
        <ContainerRigth data-css='ContainerRigth'>
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
padding: 20px;
width: 100vw;
height: 80px;
/* background-color: var(--global-color-secondary); */
border-bottom: 1px solid #AAAAAA;
`;
const IconNav = styled.div`
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
display: flex;
align-items: center;
`;
const ContainerRigth = styled.div`
display: flex;
`;

export default Navbar;
