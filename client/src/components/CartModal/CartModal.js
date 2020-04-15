import React from "react";
import styled from 'styled-components';
import Cart from '../Cart';
import Button from '../UnstyledButton';
import CloseIcon from '@material-ui/icons/Close';

const CartModal = ({ open, toggle }) => {
  return (
    <>
      <GreyDiv
        open={open}
        onClick={() => toggle()}
      />
      <Wrapper open={open}>
        <CloseBtn onClick={() => toggle()}>
        <CloseIcon style={{ fontSize: 35, margin: '20px 20px 0 0', outline: 'none' }}/>
        </CloseBtn>
        <Cart
          toggle={toggle}
        />
      </Wrapper>
    </>
  );
}

export default CartModal;

const Wrapper = styled.div`
  position: fixed;
  display:block;
  z-index:5;
  background: white;
  right: -301px;
  width:600px;
  height:calc(100vh - 80px);
  transition: ease-in-out 0.5s all;
  ${props => props.open ? (
    `transform: translateX(-300px);`
  ) : (
      `transform: translateX(300px);`
    )};
`;

const GreyDiv = styled.div`
  position:fixed;
  z-index:4;
  width:100vw;
  height:100vh;
  background-color: rgb(0,0,0);
  transition: ease-in 1s all;
  ${props => props.open ? (
    `display: block;
    opacity: 0.5;`
  ) : (
      `display: none;
    opacity: 0;`
    )}
`;

const CloseBtn = styled(Button)`
  position: relative;
  margin: 5px 5px 0 auto;
`;