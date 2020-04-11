import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const imgCategories = [
  { id: 'fitness', src: '/assets/imgCategories/fitness.jpg', title: 'Fitness', description: 'Fitness' },
  { id: 'gaming', src: '/assets/imgCategories/gaming.jpg', title: 'Gaming', description: 'Gaming' },
  { id: 'industrial', src: '/assets/imgCategories/industrial.jpg', title: 'Industrial', description: 'Industrial' },
  { id: 'medical', src: '/assets/imgCategories/medical.jpg', title: 'Medical', description: 'Medical' },
  { id: 'lifestyle', src: '/assets/imgCategories/lifestyle.jpg', title: 'Lifestyle', description: 'Lifestyle' },
  { id: 'Entertainement', src: '/assets/imgCategories/entertainement.jpg', title: 'Entertainement', description: 'Entertainement' },
  { id: 'pets', src: '/assets/imgCategories/pets.jpg', title: ' Pets and Animals ', description: 'Pets and Animals' },
];


const Categories = () => {
  return (
    <>
      <Title>Products categories</Title>
        
      <Wrapper data-css='wrapper-categories'>
        {imgCategories.map(({ id, src, title, description }) =>
          <Link to={`/items?category=${title}`}>
            <div
              key={id}>
              <img src={window.location.origin + src} alt={description} />
              <p>{title}</p>
            </div>
          </Link>
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
