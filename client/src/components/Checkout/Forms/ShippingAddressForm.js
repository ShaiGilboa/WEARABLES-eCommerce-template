import React from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({formNumber}) => {
  if(formNumber===2){
    return (
      <Wrapper>
        <div>Shipping</div>
      </Wrapper>
    );
  }else {
    return null
  }
}

export default Form;

const Wrapper = styled.form`

`;