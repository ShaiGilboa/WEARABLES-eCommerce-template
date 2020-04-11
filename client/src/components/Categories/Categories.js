import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { imgCategories } from '../../constants';

const Categories = () => {
  return (
    <>
      <Title>Products categories</Title>

      <Wrapper data-css='wrapper-categories'>
        {imgCategories.map(({ id, src, title, description }) =>
         
            <div
              key={id}>
              <Link to={`/items?category=${title}`}>
              <img src={window.location.origin + src} alt={description} />
              </Link>
              <p>{title}</p>
            </div>
         
        )}
      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
width: 100%;
/* height: auto; */
overflow: auto;
/* scroll-snap-type: x proximity; */
&::-webkit-scrollbar {
    display: none;
  }
    div{
      height: 350px;
      margin: 30px;
      position: relative;
        p{
        opacity: 0;
        position: absolute;
        height: 10px;
        top: 30px;
        font-size: 1.5em;
        left: 0;
        bottom: 0px;
        right: 0;
        margin: auto;
        text-align: center;
        font-weight: 700;
        transition: all .2s ease-in;
        }
      &:hover{
        p{
        display: block;
        position: absolute;
        height: 10px;
        top:0;
        left: 0;
        bottom: 0px;
        right: 0;
        margin: auto;
        text-align: center;
        color: white;
        font-size: 1.5em;
        font-weight: 700;
        z-index: 5;
        opacity: 1;
      }
      }
      &:after {
    position: absolute;
    content: '/';
    width: 100%; height:100%;
    top:0; left:0; bottom:0;
    background:rgba(0,0,0,0.5);
    opacity: 0;
    transition: all .5s;
    -webkit-transition: all .5s;
    }&:hover:after {
    opacity:1;
    }
      
    }
`;

const Title = styled.h2`
      margin: 80px 0 50px 0;
      font-size: 1.3em;
      text-align: center;
      font-weight: 400;
      
`

export default Categories;
