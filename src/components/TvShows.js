/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectTopRated,
  selectTvShow,
  setTopRated,
  setTvShows,
} from '../data/Movies/TvShowsSlice';
import { getPopuarTvShows, getTopRated } from '../data/Movies/tmdb_helper';
import Navbar from './Navbar';
import Slider from './Slider';
import Spinner from './Spinner';
import Video from './Video';
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
          <Video vediokey={'SL9aJcqrtnw'}></Video>
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
