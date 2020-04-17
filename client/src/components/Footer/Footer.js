import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (

    <FooterContainer>
       <div>
                <h2>WEARABLES</h2>
            </div>
            <div>
                <MenuList data-css='menu-list'>
                    <li>Disrupt</li>
                    <li>Pok pok</li>
                    <li>Flannel 3</li>
                </MenuList >
            </div>
            <div>
                <MenuList data-css='menu-list'>
                    <li>Franzen</li>
                    <li>Taxidermy </li>
                    <li>Gochujang</li>
                </MenuList>
            </div>
            <div style={{borderRight: 'none'}}>
                <Social>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fas fa-share-alt-square"></i></li>
                </Social>
            </div>


    </FooterContainer>

  );
};


const FooterContainer = styled.div`
position: relative;
/* top: 0; */
display: flex;
border: 1px solid #e6ecf0; 
justify-content: space-around;
width: 100vw;
@media (max-width: 425px) {
  flex-direction: column;
}
/* background-image: url('../assets/dot-grid.png'); */
/* padding: 50px 0; */
  div{
    display: flex;
    justify-content: flex-start;
    border-right: 1px solid #e6ecf0;
    padding: 50px 30px;
    width: 25%;
    @media (max-width: 425px) {
    width: 100%;
    padding: 30px 30px;
    border-bottom: 1px solid #e6ecf0;
    align-items: center;
}
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
const MenuList = styled.ul`
  @media(max-width: 425px){
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

const Social = styled.ul`
    display: flex;
    justify-content: flex-start;
    font-size: 2em;
    @media(max-width: 425px){
    margin-bottom: 0;
  }
    li{
        padding: 20px;

        @media (max-width: 768px) {
          padding: 10px;
          i{
            font-size: .8em;
          }
        }
        
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
