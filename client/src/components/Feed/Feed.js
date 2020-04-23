import React from "react";
import styled from 'styled-components';
import {
  useLocation,
  useParams,
} from 'react-router-dom';
// import {
//   useQuery,
// } from 'react-router-dom';


import { SmallItem } from '../Items';
import SideBar from '../SideBar';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCompleted,
  // fetchResetStatus,
  clearQueries,
} from '../../Redux/actions';

const Feed = () => {
  // const loaded = useSelector(state => state.data.isLoaded)
  const dispatch = useDispatch();
  const location = useLocation()
  // creates an array for all the values of the query 'body_location'
  // if there aren't any, it will return an empty array
  const queriesBodyLocation = new URLSearchParams(location.search).getAll('body_location');
  const [items, setItems] = React.useState([]);
  const { category } = useParams()
  // let title = location.search;
  // title = title.replace('?category=', '');
  React.useEffect(()=>{
    dispatch(clearQueries())
     // eslint-disable-next-line
  },[])
  React.useEffect(() => {
    if (category) {
      fetch(`/items/filter/${category}${location.search}`)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200){
            setItems(res.items)
          } else {
            setItems(404)
          }
        }).then(dispatch(fetchCompleted()))
    } else {
      fetch(`/items${location.search}`)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200){
            setItems(res.items)
          } else {
            setItems(404)
          }
        }).then(dispatch(fetchCompleted()))
    }
  }, [location])


  // const showCircular = () => {
  //   if (loaded ) {
  //     return (
  //       <LoaderWrapper>
  //         <CircularProgress color='primary' style={{ width: "30px", height: "30px", }} />
  //       </LoaderWrapper>
  //     )
  //   }
  // }

  return (
    <>
      <Wrapper>
        <WrapperSideBar>
          <SideBar />
        </WrapperSideBar>
        <Content>
          {!items.length ? (items!==404 ? <div>waiting for information</div> : <Header><Title>Error</Title></Header>)
            :(<>
            <Header>
                {/* <Title>Search results for: "{searchQuery}"</Title> */}
                  {queriesBodyLocation.length > 0 && queriesBodyLocation.map(query=><Query key={query}>{query}</Query>)}
              </Header>
              <WrapperItems>
                {items.map((item, index) => <SmallItem key={item._id + index} item={item} />)}
              </WrapperItems>
          </>)}
        </Content>
      </Wrapper>
    </>

  );
}

export default Feed;

const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
width: 100vw;
`
const WrapperSideBar = styled.div`
width: 300px;
/* margin-right: 4rem; */
`
const Content = styled.div`
display: flex;
flex-direction: column;
width:calc(100vw - 300px);
`

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
`

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

// const LoaderWrapper = styled.div`
//   margin: 100px auto;
//   color: #FFF;
//   display:flex;
//   justify-content: center;
// `;