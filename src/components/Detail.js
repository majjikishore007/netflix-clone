import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieById, getVedioKey } from "../data/Movies/tmdb_helper";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import Video from "./Video";
const Detail = () => {
  const { id } = useParams();
  const [key, setKey] = useState("");
  const [movie, setMovie] = useState({});
  const [loadSpinner, setLoadSpinner] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
    getKey();
    getMovies();
  }, []);
  const getKey = async () => {
    const data = await getVedioKey(id);
    setKey(data[0].key);
  };
  const getMovies = async () => {
    const data = await getMovieById(id);
    console.log("movie", data);
    setMovie(data);
  };
  const handleT = () => {
    setShow(!show);
  };
  const showTrailer = () => {
    console.log("show");
    return (
      <div className='container'>
        <VideoContainer>
          <CloseButton onClick={handleT}>
            <span>x</span>
          </CloseButton>
          <Video width={"600px"} height={"400px"} vediokey={key}></Video>
        </VideoContainer>
      </div>
    );
  };
  const getDetalData = () => {
    return (
      <>
        <Navbar></Navbar>
        <Container>
          {show && showTrailer()}
          {key && (
            <>
              <Background>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </Background>
              <ImageTitle></ImageTitle>
              <VideoContainer>
                {/* <Video width={"640px"} height={"480px"} vediokey={key}></Video> */}
              </VideoContainer>
              <Controls>
                <PlayButton>
                  <img src='/images/play-icon-black.png' alt='' />
                  <span>PLAY</span>
                </PlayButton>
                <TrailerButton onClick={handleT}>
                  <img src='/images/play-icon-white.png' alt='' />
                  <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                  <span>+</span>
                </AddButton>
              </Controls>
              <SubTitle>{movie.original_title}</SubTitle>
              <Description>{movie.overview}</Description>
              <div>
                <h3>{movie.genre}</h3>
              </div>
            </>
          )}
        </Container>
      </>
    );
  };
  return <>{loadSpinner ? <Spinner /> : getDetalData()}</>;
};

export default Detail;
const VideoContainer = styled.div`
  position: absolute;
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-y: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  z-index: 2;
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const CloseButton = styled(AddButton)``;
const SubTitle = styled.div`
  z-index: 2;
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;
  margin-top: 26px;
  font-weight: 600;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
