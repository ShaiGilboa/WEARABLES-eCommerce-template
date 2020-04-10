import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import test from './items-Dev';
import { typeaheadSuggestion } from '../../utils';
import { MAX_NUMBER_OF_SUGGESTIONS } from '../../constants';

// the prop is the array of items that we will search in
const Typeahead = ({ items }) => {
  const [searchInputVal, setSearchInputVal] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([])

// the search is a form, so there is a submit handler - maybe later we can have a 'search page' and not just the suggestions
  const submitHandler = (event) => { 
    event.preventDefault();
  }

// when ever there is a change in the input search, the state get updated and we look for suggestions
  React.useEffect(()=> {
    if(searchInputVal) setSuggestions(typeaheadSuggestion(searchInputVal,test)) // receives an object that has the structure of the suggested strings, and the id of each suggestion
  },[searchInputVal])
  
  return (
    <Wrapper>
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
      {/*this is an ul*/}
      <TypeaheadSuggestions> 
      {/*for each suggestion we will create a li in a Link - the Link is to that item's page*/}
      {/*there is a maximum number of results shown, it is set in `constants.js`*/}
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
      <p>search value: {searchInputVal} </p>
    </Wrapper>
  )
}

export default Typeahead;

const Wrapper = styled.div`

`;

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