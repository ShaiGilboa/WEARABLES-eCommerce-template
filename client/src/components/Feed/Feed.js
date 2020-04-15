import React from "react";
import styled from 'styled-components';
import {
  useParams,
  useLocation,
} from 'react-router-dom';

import { SmallItem } from '../Items';
import SideBar from '../SideBar';

const Feed = () => {
  const [items, setItems] = React.useState([]);
  const location = useLocation()

  React.useEffect(() => {
    fetch(`/items${location.search}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setItems(res.filtered)
      })
  }, [])
  return (
    <>
    <Wrapper>
    <WrapperSideBar>
    <SideBar/>
    </WrapperSideBar>
    <WrapperItems>
      {items.map((item, index) => <SmallItem key={item.id + index} item={item} />)}
    </WrapperItems>
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
`

const WrapperItems = styled.section`
  margin: 60px;
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;