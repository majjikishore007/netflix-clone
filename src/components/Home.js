import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, selectMovie } from "../data/Movies/MovieSlice";
import MovieCard from "./MovieCard";
import Slider from "./Slider";
const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_APP}&language=en-US&page=1`
    );
    const response = await data.json();
    const temp = response.results;
    console.log(temp);
    console.log(setMovies);
    dispatch(setMovies(temp));
    console.log("redux strore", movies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className='menu'>
        <Navbar />
      </div>
      <Conatiner>
        <Slider></Slider>
      </Conatiner>
    </>
  );
};

export default Home;
const Conatiner = styled.div`
  width: 100%;
  padding: 0px 5em;
  margin: 10px 0px;
`;
