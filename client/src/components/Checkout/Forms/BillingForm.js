import React from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({formNumber}) => {
  if(formNumber===3){
    return (
      <Wrapper>
        <div>billing</div>
      </Wrapper>
    );
  } else {
    return null
  }
}

export default Form;

const Wrapper = styled.form`

`;