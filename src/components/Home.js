import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "../styles/home.css";
import { useDispatch } from "react-redux";
import movieReducer, { setMovies } from "../data/Movies/MovieSlice";

const Home = () => {
  const getData = async () => {
    //
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=3a6ea45912e022a5d4fdac499fa4adc2"
    );
    const response = await data.json();
    console.log(response);
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
        <h1>heloo</h1>
      </Conatiner>
      <Conatiner>
        <h1>heloo</h1>
      </Conatiner>
      <Conatiner>
        <h1>heloo</h1>
      </Conatiner>
    </>
  );
};

export default Home;
const Conatiner = styled.div`
  width: 100%;
  height: 70vh;
  background: blue;
`;
