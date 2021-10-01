import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopuarTvShows,
  getTopRated,
  getLatest,
} from "../data/Movies/tmdb_helper";
import {
  selectTvShow,
  setTvShows,
  setTopRated,
  selectTopRated,
} from "../data/Movies/TvShowsSlice";
import Navbar from "./Navbar";
import Video from "./Video";
import Slider from "./Slider";
import Spinner from "./Spinner";
import styled from "styled-components";
const TvShows = () => {
  const popularTvShows = useSelector(selectTvShow);
  const topRated = useSelector(selectTopRated);
  const dispatch = useDispatch();
  const [loadSpinner, setLoadSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, []);
  useEffect(() => {
    getPopuarTvShows()
      .then((res) => {
        dispatch(setTvShows(res));
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    getTopRated()
      .then((res) => {
        dispatch(setTopRated(res));
      })
      .catch((err) => console.error(err));
  }, []);
  const getTvShowsData = () => {
    return (
      <>
        <div className='menu'>
          <Navbar />
        </div>

        <ConatinerVedio>
          <Video vediokey={"SL9aJcqrtnw"}></Video>
        </ConatinerVedio>
        <Conatiner>
          <h2 className='text-align left'>Popular TvShows </h2>
          <Slider movies={popularTvShows}></Slider>
        </Conatiner>
        <Conatiner>
          <h2 className='text-align left'>Top Rated</h2>
          <Slider movies={topRated}></Slider>
        </Conatiner>
      </>
    );
  };
  return <>{loadSpinner ? <Spinner /> : getTvShowsData()}</>;
};

export default TvShows;
const ConatinerVedio = styled.div`
  width: 100%;
`;
const Conatiner = styled.div`
  width: 100%;
  padding: 1em 3em;
  /* margin: 10px auto; */
  background-color: black;
`;
