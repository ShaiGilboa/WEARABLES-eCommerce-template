import React from 'react';
import styled from 'styled-components';

const FourOhFour = () => {
 return (
  <Error>404 page
   <h1>Page Not Found</h1>
  </Error>

 );
}

const Error = styled.div`
font-size: 60px;
text-align: center;
align-content:center;
margin: 50vh;

`;

export default FourOhFour;