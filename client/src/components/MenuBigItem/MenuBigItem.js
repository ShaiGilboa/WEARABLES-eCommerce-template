import React from 'react';
import styled from 'styled-components';
import { imgCategories } from '../../constants';
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const MenuBigItem = () => {
  let history = useHistory();
  const location = useLocation()
  let active = location.search;
  active = active.replace('?category=', '');

  const linkToCategory = (ev, title) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/items/filter/${title}`);
  }

 const filterMenu = useSelector(state => state.data.typeaheadItems);

//UseEffect to console.log
 if(filterMenu){
   console.log(filterMenu)
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
    </WrapperSideBar>
  )
};

const WrapperSideBar = styled.div`
  width: 300px;
  border-right: 1px solid #e6ecf0;
  height:calc(100vh - 300px);
  @media(max-width: 1130px ){
    height:100vh;
}
`
const MenuCat = styled.div`

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

export default MenuBigItem;
