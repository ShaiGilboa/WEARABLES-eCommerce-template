import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream

=======
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import test from '../../temp/items-Dev';
>>>>>>> Stashed changes
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
    if(searchInputVal) setSuggestions(typeaheadSuggestion(searchInputVal,items)) // receives an object that has the structure of the suggested strings, and the id of each suggestion
  },[searchInputVal])
  
  return (
    <Wrapper>
      <Search onSubmit={(event)=>submitHandler(event)}>
      <ContainerSearch data-css='ContainerSearch'>
        <InputField
          value={searchInputVal}
          placeholder={'what are looking for?'}
          onChange={(event)=>setSearchInputVal(event.target.value)}
        />
        <SearchButton
          type='submit'
          data-css='SearchButton'
        >
        <SearchOutlinedIcon/>
        </SearchButton>
      </ContainerSearch>
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
      {/* <p>search value: {searchInputVal} </p> */}
    </Wrapper>
  )
}

export default Typeahead;

const Wrapper = styled.div`
 margin: 0 30px;
`;

const InputField = styled.input`
 width: 170px;
 font-size: 1em;
 border: none;
 background-color: #F4F7F6;
 border-radius: 4px;
 padding-left: 10px;
 outline: none;
 height : 40px;
 transition: all .2s ease-in;
  &:focus{
    width: 300px;
  }
  ::placeholder {
  color: #D3D3D3;
}
`

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
`;

const TypeaheadSuggestions = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top:50px;
  left:0;
  width: 700px;
  background-color: white;
    a{
      color: black;
    }
    li{
      padding-bottom: 10px;
    }
`;

const Bold = styled.span`
  font-weight: bold;
`;