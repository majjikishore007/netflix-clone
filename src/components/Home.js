import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovies,
  selectMovie,
  setTrending,
  selectTrendingMovies,
  setUpcoming,
  selectUpComingMovies,
} from "../data/Movies/MovieSlice";
import MovieCard from "./MovieCard";
import Slider from "./Slider";
import Spinner from "./Spinner";
import {
  getMovies,
  getTrending,
  getUpComing,
} from "../data/Movies/tmdb_helper";
import Video from "./Video";
const Home = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectMovie);
  const trendingmovies = useSelector(selectTrendingMovies);
  const upcoming = useSelector(selectUpComingMovies);
  const [loadSpinner, setLoadSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, []);
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch(setMovies(movies));
    });
  }, []);
  useEffect(() => {
    getTrending().then((movies) => {
      dispatch(setTrending(movies));
    });
    getUpComing().then((movies) => {
      dispatch(setUpcoming(movies));
    });
  }, []);
  const getHomeData = () => {
    return (
      <>
        <div className='menu'>
          <Navbar />
        </div>

        <ConatinerVedio>
          <Video></Video>
        </ConatinerVedio>
        <Conatiner>
          <h2 className='text-align left'>Trendingmovies</h2>
          <Slider movies={trendingmovies}></Slider>
        </Conatiner>
        <Conatiner>
          <h2 className='text-align left'>Popular</h2>
          <Slider movies={popular}></Slider>
        </Conatiner>
        <Conatiner>
          <h2 className='text-align left'>Up coming</h2>
          <Slider movies={upcoming}></Slider>
        </Conatiner>
      </>
    );
  };
  return <>{loadSpinner ? <Spinner /> : getHomeData()}</>;
};

export default Home;
const ConatinerVedio = styled.div`
  width: 100%;
`;
const Conatiner = styled.div`
  width: 100%;
  padding: 0px 3em;
  /* margin: 10px auto; */
  background-color: black;
`;