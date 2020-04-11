import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { typeaheadSuggestion } from '../../utils';
import { MAX_NUMBER_OF_SUGGESTIONS } from '../../constants';
import { useHistory } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  addItemsReduxStore,
} from '../../Redux/actions';

// the prop is the array of items that we will search in
const Typeahead = (
  // { items }
) => {
  const [searchInputVal, setSearchInputVal] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const items = useSelector(state => state.items)
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  let history = useHistory();

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(res => dispatch(addItemsReduxStore(res.filtered)))
  }, [])

  // the search is a form, so there is a submit handler - maybe later we can have a 'search page' and not just the suggestions
  const submitHandler = (event) => {
    event.preventDefault();
  }

  // when ever there is a change in the input search, the state get updated and we look for suggestions
  useEffect(() => {
    (searchInputVal && items) ? setSuggestions(typeaheadSuggestion(searchInputVal, items)) : setSuggestions([])// receives an object that has the structure of the suggested strings, and the id of each suggestion
  }, [searchInputVal])

  // on mousedown outside of the search, close the results using the wrapperRef / event.target
  //Doesn't reload the component 
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return (() => {
      document.removeEventListener("mousedown", handleClickOutside)
    })
  }, [searchInputVal]);

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setSearchInputVal('');
    }
  }

  // 
  const handleClickOnItemInSuggestionDropdown = (ev, suggestion) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/items/${suggestion.id}`);
    setSearchInputVal('');  
  }

  return (
    <Wrapper
      ref={wrapperRef}
      data-css='Typehead-Wrapper'
    >
      <Search 
        data-css='SearchForm' 
        //at the moment this doesn't do anything
        onSubmit={(event) => submitHandler(event)}
      >
        <ContainerSearch data-css='ContainerSearch'>
          <InputField
            data-css='InputField'
            value={searchInputVal}
            placeholder={'Search...'}
            onChange={(event) => setSearchInputVal(event.target.value)}
          />
          <SearchButton
            type='submit'
            data-css='SearchButton'
          >
            <SearchOutlinedIcon />
          </SearchButton>
        </ContainerSearch>
        {/*this is an ul*/}
        <TypeaheadSuggestions>
          {/*for each suggestion we will create a li in a Link - the Link is to that item's page*/}
          {/*there is a maximum number of results shown, it is set in `constants.js`*/}
          {suggestions.map((suggestion, index) => (index < MAX_NUMBER_OF_SUGGESTIONS) &&
            <DropDownItem
              onClick = {(ev) => handleClickOnItemInSuggestionDropdown(ev, suggestion)}  
            >
              <li
                key={`${index}`}
              >
                <img src={items.imageSrc} />
                <span>{suggestion.parts[0]}</span>
                <Bold>{searchInputVal}</Bold>
                <span>{suggestion.parts[1]}</span>
              </li>
            </DropDownItem>
          )}

        </TypeaheadSuggestions>
      </Search>
    </Wrapper>
  )
}

export default Typeahead;

const Wrapper = styled.div`
 margin: 0 0 0 30px;
 padding: 0 20px 0 30PX;
 height: 80px;
 border-left: 1px solid #e6ecf0;
 display: flex;
 align-items: center;
`;

const InputField = styled.input`
 width: 800px;
 font-size: 1em;
 border: none;
 background-color: #F4F7F6;
 /* border-radius: 4px; */
 padding-left: 10px;
 outline: none;
 height : 40px;
 transition: all .2s ease-in;
  &:focus{
    width: 800px;
  }
  ::placeholder {
  color: #D3D3D3;
}
@media (max-width: 1425px) {
  margin-left: 6px;
  &:focus{
    width: 400px;
  }
}
`;

const Search = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  position: relative;

`;

const ContainerSearch = styled.div`
  display: flex;
`;

const SearchButton = styled.button`
background-color: white;
border: none;
cursor: pointer;
margin-left: 10px;
`;

const TypeaheadSuggestions = styled.ul`
  position: absolute;
  top:50px;
  left:0;
  width: 812px;
  background-color:rgba(255, 255, 255, 0.99);
  display: flex;
  flex-direction: column;
  @media (max-width: 1425px) {
  margin-left: 6px;
  width: 411px;
}
    li{
      padding: 20px 10px  20px 10px;
    }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const DropDownItem = styled.p`
  color: black;
  transition: all .2s ease-in;
  border-bottom: 1px solid #e6ecf0;
  &:hover{
    background-color: #F4F7F6;
    cursor: pointer;
  } 
`;