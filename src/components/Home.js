import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, selectMovie } from "../data/Movies/MovieSlice";
import MovieCard from "./MovieCard";
const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);
  const getData = async () => {
    //3a6ea45912e022a5d4fdac499fa4adc2
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3a6ea45912e022a5d4fdac499fa4adc2&language=en-US&page=1`
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
        <img src='https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg' />
      </Conatiner>
      <div className='cards'>
        {movies.map((movie) => (
          <MovieCard
            img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          ></MovieCard>
        ))}
      </div>
    </>
  );
};

export default Home;
const Conatiner = styled.div`
  width: 100%;
  /* height: 80vh; */
  /* background: blue; */
  img {
    width: 100%;
    height: 100%;
  }
`;
