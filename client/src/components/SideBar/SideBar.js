import React from 'react';
import styled from 'styled-components';
import { imgCategories } from '../../constants';
// import {Link} from 'react-router-dom';
import { 
  useHistory,
  useLocation,
  } from "react-router-dom";
// import { Checkbox } from '@material-ui/core';
import {
  useSelector,
  useDispatch,
  } from 'react-redux';

import {
  changeQueries,
} from '../../Redux/actions';

const SideBar = () => {
  let history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const queriesArr = useSelector(state => state.data.queries);

  // // creates an array for all the values of the query 'body_location'
  // // if there aren't any, it will return an empty array
  // const queriesBodyLocation = new URLSearchParams(location.search).getAll('body_location');
  // const [queries, setQueries] = React.useState('?');
  let active = location.pathname;
  active = active.replace('/items/filter/', '');
  const linkToCategory = (ev, title) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/items/filter/${title}`);
  }

  const prepQueries = (value, checked) => {
    dispatch(changeQueries(value, checked))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let queriesString = ''
    if(queriesArr.length)queriesString = '?body_location='+queriesArr.join('&body_location=')
    history.push(location.pathname+queriesString)
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
      <MenuCat>
        <CatTitle>Filters</CatTitle>
        <h4 style={{ padding: '20px 30px 0' }}>Price</h4>
        <WrapperFilterList>
          <form
            onSubmit={(event)=>handleSubmit(event)}
          >
            <input type='checkbox' name='category' value={location.search} style={{display:'none'}} />
          <CheckboxWrapper data-css='checkboxWrapper'>
            <input type="checkbox" name="low-price"/>
            <label htmlFor="low-price">$0 to $30</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="med-price" />
            <label htmlFor="30to60">$30 to $60</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="high-price" />
            <label htmlFor="60to100">$60 to $100</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="highest" />
            <label htmlFor="more100">$100 and more</label>
          </CheckboxWrapper>
          <h4 style={{padding:'20px 0 20px'}}>Body Location</h4>
          <CheckboxWrapper data-css='checkboxWrapper'>
            <input type="checkbox" name="body_location" id='Arms' value='Arms'
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Arms">Arms</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Wrist' value='Wrist'
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Wrist">Wrist</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Head' value='Head'
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Head">Head</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Hands' value='Hands' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
              />
            <label htmlFor="Hands">Hands</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Waist' value='Waist' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Waist">Waist</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Chest' value='Chest' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Chest">Chest</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Torso' value='Torso' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Torso">Torso</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Neck' value='Neck' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Neck">Neck</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" name="body_location" id='Feet' value='Feet' 
              onChange={(event)=>prepQueries(event.target.value, event.target.checked)}
            />
            <label htmlFor="Feet">Feet</label>
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
  height:fit-content;
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
 /* height: calc((100vh - 80px)); */
 height: 100%;
  overflow: auto;
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
