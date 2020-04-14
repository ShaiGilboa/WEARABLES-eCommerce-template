import React from 'react';
import styled from 'styled-components';

import Button from '../../UnstyledButton';

const Form = ({formNumber}) => {
  if(formNumber===1) {
    return (
      <Wrapper>
        <div>useInfo</div>
      </Wrapper>
    );
  }else {
    return null
  }
}

export default Form;

const Wrapper = styled.form`

`;