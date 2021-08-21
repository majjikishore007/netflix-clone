import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { selectMovie } from "../data/Movies/MovieSlice";
import "../styles/slider.css";
const SliderMovie = (props) => {
  const { movies } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <>
      <Carousel {...settings}>
        {movies != null ? (
          movies.map((movie) => (
            <Wrap>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=''
              />
            </Wrap>
          ))
        ) : (
          <h1>hello</h1>
        )}
      </Carousel>
    </>
  );
};

export default SliderMovie;
const Carousel = styled(Slider)`
  flex-direction: row;
  .slick-list {
    overflow: visible;
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
  button {
    z-index: 2;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
      transform: scale(1.3);
    }
    img:hover {
      transform: scale(1.3);
    }
  }
`;
