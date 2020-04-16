import React from "react";
import styled from 'styled-components';
import {
  useParams,
  useLocation,
} from 'react-router-dom';

import { SmallItem } from '../Items';
import SideBar from '../SideBar';

const Feed = () => {
  console.log('feed')
  const location = useLocation()
  const [items, setItems] = React.useState([]);
  const {category} = useParams()
  let title = location.search;
  title = title.replace('?category=','');
  React.useEffect(() => {
    if (category) {
      fetch(`/items/filter/${category}${location.search}`)
      .then(res => res.json())
      .then(res => {
        if(res.status===200)setItems(res.items)
      })
    }else{
      fetch(`/items${location.search}`)
        .then(res => res.json())
        .then(res => {
          if(res.status===200)setItems(res.items)
        })
    }
  }, [location])
  console.log('items',items)
  return (
    <>
      <Wrapper>
        <WrapperSideBar>
          <SideBar />
        </WrapperSideBar>
        <Content>
        <Title>{title}</Title>
        <WrapperItems>
          {items.map((item, index) => <SmallItem key={item.id + index} item={item} />)}
        </WrapperItems>
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