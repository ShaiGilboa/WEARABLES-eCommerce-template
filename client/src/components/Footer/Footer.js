import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (

    <FooterContainer>
       <div>
                <h2>WEARABLES</h2>
            </div>
            <div>
                <ul>
                    <li>Disrupt</li>
                    <li>Pok pok</li>
                    <li>Flannel 3</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Franzen</li>
                    <li>Taxidermy </li>
                    <li>Gochujang</li>
                </ul>
            </div>
            <div style={{borderRight: 'none'}}>
                <Social>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fas fa-share-alt-square"></i></li>
                </Social>
            </div>


    </FooterContainer>

  );
};


const FooterContainer = styled.div`

display: flex;
border: 1px solid #e6ecf0; 
justify-content: space-around;
width: 100vw;
/* background-image: url('../assets/dot-grid.png'); */
/* padding: 50px 0; */
  div{
    display: flex;
    justify-content: flex-start;
    border-right: 1px solid #e6ecf0;
    padding: 50px 30px;
    width: 25%;
    h2{
      font-size: 1.5em;
    }
  }
    p{
        font-size: 1em;
        font-weight: 200;
        color: black;
        padding: 20px 0 0 0;
        width: 200px;

        span{
            font-size: 1.6em;
        }
    }
    li {
        list-style: none;
        padding: 5px;
        font-size: .8em;
        font-weight: 400;
        text-transform: uppercase;
    }
    img{
        width: 200px;
    }    
`

const Social = styled.ul`
    display: flex;
    justify-content: flex-start;
    font-size: 2em;
    li{
        padding: 20px;
        
        .fa-twitter, .fa-facebook, .fa-share-alt-square  {
          transition: all .2s ease-in;
        }

        .fa-twitter:hover{
            color: dodgerblue;
        }
        .fa-share-alt-square:hover{
            color: orange;
        }
        .fa-facebook:hover{
            color: red;
        }  
    }
`


export default Footer;
