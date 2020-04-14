import React from "react";
import styled from 'styled-components';
import Typeahead from '../Typeahead';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal';
import { useSelector } from 'react-redux';
import { useAuth0 } from "../SignIn/react-auth0-spa";
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';


const Navbar = () => {
  // Authentification
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  // adding quantity display in the shopping cart 
  const cart = useSelector(state => state.userInfo.cart);
  const qtyItem = Object.values(cart)
  const allQty = qtyItem.reduce((total, cart)  => {
    return total + cart.quantity;
  }, 0)
  const [cartModalOpenFlag, setCartModalOpenFlag] = React.useState(false);

  const ToggleModal = () => {
    setCartModalOpenFlag(!cartModalOpenFlag)
  }

  return (
    <>
      <Wrapper
      data-css='Wrapper'
      onClick={()=>{
        if(cartModalOpenFlag)setCartModalOpenFlag(false)
        }
      }
      >
        <Link to={'/'}>
          <ContainerLeft
            data-css='ContainerLeft'
          >
            <p style={{ fontSize: '2em' }}>WEARABLES</p>
        </ContainerLeft>
        </Link>
        <ContainerRigth data-css='ContainerRigth'>
          <div>
            <Typeahead />
          </div>
          <IconNav data-css='IconNav'>
            <LanguageOutlinedIcon />
          </IconNav >
          {!isAuthenticated ? (
          <IconNav 
            onClick={() => loginWithRedirect({})}
            data-css='IconNav'><AccountCircleOutlinedIcon /></IconNav>
          ) : ( <IconNav 
                  onClick={() => logout()}
                  data-css='IconNav'><ExitToAppOutlinedIcon />
                </IconNav>
          )}
          {isAuthenticated && (
            <Link to="/profile">
            <IconNav 
            data-css='IconNav'><AssignmentIndOutlinedIcon />
          </IconNav>
          </Link>
          )}
          <IconNav
          data-css='IconNav'
          style={{ position: 'relative' }}
          onClick={()=>ToggleModal()}
          >
            <ShoppingCartOutlinedIcon />
            {allQty >= 1 &&
              <NumItemCart><p>{allQty}</p></NumItemCart>
            }
          </IconNav>
        </ContainerRigth>
      </Wrapper>
      <CartModal
        open={cartModalOpenFlag}
        toggle={ToggleModal}
      />
    </>
  )
}

export default Navbar;

const Wrapper = styled.div`
position:sticky;
top:0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0 20px 30px;
width: 100%;
height: 80px;
background-color: white;
border-bottom: 1px solid #e6ecf0;
`;

const NumItemCart = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
background-color: red;
border-radius: 50%;
color: white;
font-size: .7em;
height: 20px;
width: 20px;
padding-top: 2px;
text-align: center;
top: 18px;
right: 18px;
`

const IconNav = styled.div`
  padding: 0 30px;
  border-left: 1px solid #e6ecf0;
  height: 80px;
  display: flex;
  align-items: center;
  cursor:pointer;
  transition: all .2s ease-in;
    &:hover{
      background-color: #F4F7F6;
    }
`;

const ContainerLeft = styled.div`
display: flex;
align-items: center;
cursor:pointer;
`;
const ContainerRigth = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 80px;
`;