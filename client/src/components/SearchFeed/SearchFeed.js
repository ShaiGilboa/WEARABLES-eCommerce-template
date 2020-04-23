import React from "react";
import styled from 'styled-components';
import {
  useParams,
  useLocation,
} from 'react-router-dom';
import {
  // useSelector,
  useDispatch,
  } from 'react-redux';
import {
  clearQueries,
} from '../../Redux/actions';
import { SmallItem } from '../Items';
import SideBar from '../SideBar';
const SearchFeed = () =>{
  const location = useLocation();
  const dispatch = useDispatch();
  // creates an array for all the values of the query 'body_location'
  // if there aren't any, it will return an empty array
  const queriesBodyLocation = new URLSearchParams(location.search).getAll('body_location');
  const {searchQuery} = useParams();
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{
    dispatch(clearQueries())
    // eslint-disable-next-line
  },[])

  React.useEffect(() => {
    fetch(`/search/${searchQuery}${location.search}`)
      .then(res=>res.json())
      .then(res=>{
        console.log('res',res)
        if (res.status === 200) {
          setItems(res.searchResults)
        }
      })
  },[location])
  return (
    <Wrapper>
        <WrapperSideBar>
          <SideBar />
        </WrapperSideBar>
        <Content>
          <Header>
            {items.length ? <Title>Search results for: "{searchQuery}"</Title> : <Title>No results found for: {searchQuery}</Title>}
            {queriesBodyLocation.length>0 && queriesBodyLocation.map(query=><Query key={query}>{query}</Query>)}
          </Header>
          {items && (
          <WrapperItems>
            {items.map((item, index) => <SmallItem key={item._id + index} item={item} />)}
          </WrapperItems>
          )}
        </Content>
      </Wrapper>
  )
}

export default SearchFeed;

const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
width: 100vw;
`;

const WrapperSideBar = styled.div`
width: 300px;
/* margin-right: 4rem; */
`;

const Content = styled.div`
display: flex;
flex-direction: column;
width:calc(100vw - 300px);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Query = styled.span`
  margin: auto 5px 0 5px;
`;

const Title = styled.h2`
  padding: 60px 60px 0;
  font-size: 3em;
`;

const WrapperItems = styled.section`
  padding: 60px;
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media(max-width: 1024px){
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
`;