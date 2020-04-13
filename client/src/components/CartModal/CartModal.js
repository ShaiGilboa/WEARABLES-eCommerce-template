import React from "react";
import styled from 'styled-components';

import Cart from '../Cart';
import Button from '../UnstyledButton';

const CartModal = ({open, toggle}) => {
    return (
      <>
      <GreyDiv
        open={open}
        onClick={()=>toggle()}
      />
      <Wrapper open={open}>
        <CloseBtn onClick={()=>toggle()}>
          X
        </CloseBtn>
        <Cart />
      </Wrapper>
      </>
    );

}

export default CartModal;

const Wrapper = styled.div`
  position: fixed;
  display:block;
  z-index:5;
  background: #e6ecf0;
  right: -301px;
  width:300px;
  height:calc(100vh - 80px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 100px;
  transition: ease-in-out 0.5s all;
  ${props=>props.open ? (
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
  background-color: rgb(255,255,255);
  transition: ease-in 1s all;
  ${props=>props.open?(
    `display: block;
    opacity: 0.5;`
  ):(
    `display: none;
    opacity: 0;`
  )}
`;

const CloseBtn = styled(Button)`
  position: relative;
  margin: 5px 5px 0 auto;
`;