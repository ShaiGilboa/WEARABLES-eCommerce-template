import React from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({formNumber}) => {
  if(formNumber===2){
    return (
      <Wrapper>
        <div>Shipping</div>
        <input type="text" id="username" name="username" required>
        </input>

      </Wrapper>
    );
  }else {
    return null
  }
}

export default Form;

const Wrapper = styled.div`

`;