import React from "react";
import styled from 'styled-components';
import { 
  useParams,
  useLocation,
  } from 'react-router-dom';

import { SmallItem } from '../Items';

const Feed = () => {
    const [items, setItems] = React.useState([]);
    const location = useLocation()

    React.useEffect(()=>{
      fetch(`/items${location.search}`)
      .then(res=>res.json())
      .then(res=>setItems(res.filtered))
    },[])
    return (
      <Wrapper>
        {items.map((item, index)=><SmallItem key={item.id+index} item={item} />)}
      </Wrapper>
    );
}

export default Feed;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;