import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { imgCategories } from '../../constants';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const Categories = () => {
  let categories = useHistory();

  useEffect(() => {
    document.getElementById('prev').onclick = function () {
      scrollLeft(document.getElementById('wrapperCarousel'), -300, 500);   
    }
    document.getElementById('next').onclick = function () {
      scrollLeft(document.getElementById('wrapperCarousel'), 300, 500);   
    }
    
    function scrollLeft(element, change, duration) {
       var start = element.scrollLeft,
           currentTime = 0,
           increment = 20;       
       var animateScroll = function(){        
           currentTime += increment;
           var val = Math.easeInOutQuad(currentTime, start, change, duration);
           element.scrollLeft = val;
           if(currentTime < duration) {
               setTimeout(animateScroll, increment);
           }
       };
       animateScroll();
    }
    
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
     t /= d/2;
     if (t < 1) return c/2*t*t + b;
     t--;
     return -c/2 * (t*(t-2) - 1) + b;
    };
  }, [])


  return (
    <>
    <Title>Products categories</Title>
      <WrapperNav>
        <NavCategories>
          <IconNav id={'prev'} data-css='IconNav'><NavigateBeforeIcon /></IconNav>
          <IconNav id={'next'} data-css='IconNav'><NavigateNextIcon /></IconNav>
        </NavCategories>
      </WrapperNav>

      <WrapperCarousel id={'wrapperCarousel'} data-css='wrapper-categories'>
        {imgCategories.map(({ id, src, title, description }) =>

          <CatContainer onClick={(ev) => {
            ev.preventDefault();
            categories.push(`/items?category=${title}`);
          }}
            key={id}>
            {/* <Link to={`/items?category=${title}`}> */}
            <img src={window.location.origin + src} 
                 alt={description}
                 id= {id} />
            {/* </Link> */}
            <p>{title}</p>
          </CatContainer>
        )}
      </WrapperCarousel>
    </>
  );
};

const NavCategories = styled.div`
  display: flex;
  text-align: right;
`;

const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  border-right: 1px solid #e6ecf0;

`;
export default Categories;


const WrapperCarousel = styled.div`
  display: flex;
  cursor: ew-resize;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
width: 100%;
/* height: auto; */
overflow: auto;
&::-webkit-scrollbar {
    display: none;
  }
    div{
      scroll-snap-align: center;

      /* height: 350px; */
      margin: 30px;
      position: relative;
      cursor: pointer;
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
        padding: 60px;
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

const IconNav = styled.div`
  padding: 0 30px;
  border-left: 1px solid #e6ecf0;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  height: 80px;
  display: flex;
  align-items: center;
  cursor:pointer;
  transition: all .2s ease-in;
    &:hover{
      background-color: #F4F7F6;
    }
`;

const CatContainer = styled.div`
white-space: nowrap;
`

const Title = styled.h2`
      margin: 80px 0 50px 0;
      font-size: 1.3em;
      text-align: center;
      font-weight: 400;
      
`

