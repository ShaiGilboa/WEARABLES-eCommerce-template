import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import test from './items-Dev';
import { typeaheadSuggestion } from '../../utils';
import { MAX_NUMBER_OF_SUGGESTIONS } from '../../constants';

const Typeahead = ({ items }) => {
  const [searchInputVal, setSearchInputVal] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([])

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchValue(searchInputVal)
  }
  React.useEffect(()=> {
    if(searchInputVal) setSuggestions(typeaheadSuggestion(searchInputVal,test))
  },[searchInputVal])
  
  return (
    <>
      <div>Typeahead</div>
      <Search onSubmit={(event)=>submitHandler(event)}>
      <div>
        <input
          value={searchInputVal}
          placeholder={'what are looking for?'}
          onChange={(event)=>setSearchInputVal(event.target.value)}
        />
        <button
          type='submit'
        >
          Search
        </button>
      </div>
      <TypeaheadSuggestions>
        {suggestions.map((suggestion, index)=> (index < MAX_NUMBER_OF_SUGGESTIONS) && 
          <li key={`${index}`}>
            <Link to={`/${suggestion.id}`}>
              <Bold>{suggestion.parts[0]}</Bold>
              <span>{searchInputVal}</span>
              <Bold>{suggestion.parts[1]}</Bold>
            </Link>
          </li>)}
      </TypeaheadSuggestions>
      </Search>
      <p>search value: {searchValue} </p>
    </>
  )
}

export default Typeahead;

const Search = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
`;

const TypeaheadSuggestions = styled.ul`
  margin: 0;
  padding: 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;