import React from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import '../styles/slider.css';
const SliderMovie = (props) => {
  const { movies } = props;

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 4,
  };

  return (
    <>
      <Carousel {...settings}>
        {movies != null
          ? movies.map((movie, id) => (
              <div key={id}>
                <Link to={`/detail/${movie.id}`}>
                  <Wrap key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=''
                    />
                  </Wrap>
                </Link>
              </div>
            ))
          : ''}
      </Carousel>
    </>
  );
};

export default SliderMovie;
const Carousel = styled(Slider)`
  width: 100%;
  /* height: 300px; */
  margin-inline: auto;
  flex-direction: row;
  .slick-list {
    overflow: hidden;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: blue;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  button {
    visibility: hidden;
  }
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 280px;
    border-radius: 4px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
      transform: scale(1.1);
    }
  }
`;
