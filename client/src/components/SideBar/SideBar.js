import React from 'react';
import styled from 'styled-components';
import { imgCategories } from '../../constants';
// import {Link} from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
import { Checkbox } from '@material-ui/core';


const SideBar = () => {
  let history = useHistory(); 
  const location = useLocation()
  let active = location.search;
  active = active.replace('?category=','');
  
  const linkToCategory = (ev, title) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/items?category=${title}`);
  }


  return (
    <WrapperSideBar>
      <MenuCat>
        <CatTitle>Categories</CatTitle>
        <WrapperCatList>

          {imgCategories.map(({ title }) =>
            <CatList key={title} style={{ backgroundColor: active === title && "#F4F7F6" }} onClick={(ev) => linkToCategory(ev, title)}>{title}</CatList>
          )}
        </WrapperCatList>
      </MenuCat>
      <MenuCat>
        <CatTitle>Filters</CatTitle>
        <h4 style={{padding:'20px 30px 0'}}>Price</h4>
        <WrapperFilterList>
          <form>
          <CheckboxWrapper data-css='checkboxWrapper'>
            <input type="checkbox" name="low-price"/>
            <label for="0to30">$0 to $30</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="med-price" />
            <label for="30to60">$30 to $60</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="high-price" />
            <label for="60to100">$60 to $100</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="highest" />
            <label for="more100">$100 and more</label>
          </CheckboxWrapper>
          <h4 style={{padding:'20px 0 20px'}}>Body Location</h4>
          <CheckboxWrapper data-css='checkboxWrapper'>
            <input type="checkbox" name="low-price"/>
            <label for="0to30">Arms</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="med-price" />
            <label for="30to60">Wrist</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="high-price" />
            <label for="60to100">Head</label>
          </CheckboxWrapper>
          <FilterButton type="submit" value="Filter"/>
          </form>
        </WrapperFilterList>
      </MenuCat>
    </WrapperSideBar>
  )
};

const WrapperSideBar = styled.div`
  width: 300px;
  border-right: 1px solid #e6ecf0;
  height:calc(100vh - 80px);
`
const MenuCat = styled.div`

`
const CheckboxWrapper = styled.div`
padding: 0 0 12px 0;
`

const CatTitle = styled.h3`
  font-size: 1.2rem;
  background-color: #F4F7F6;
  padding: 20px 30px;
  border-bottom: 1px solid #e6ecf0;
`
const WrapperCatList = styled.div`
 list-style: none;
`
const WrapperFilterList = styled.div`
 padding: 20px 30px;
 border-bottom: 1px solid #e6ecf0;

`
const CatList = styled.li`
padding: 20px 0;
border-bottom: 1px solid #e6ecf0;
cursor: pointer;
padding: 15px 30px;
transition: all .1s ease-in;
  &:hover{
    background-color: #F4F7F6;
  }
`
const FilterButton = styled.input`
outline: none;
background-color: red;
color: white;
padding: 10px 30px;
  border: 1px solid white;
font-size: 1em;
margin-top: 10px;
cursor: pointer;
border-radius: 4px;
  /* transition: all .2s ease-in; */
    /* &:hover{
      background-color: white;
      border: 1px solid white;
      color: black;
    } */
`

export default SideBar;
