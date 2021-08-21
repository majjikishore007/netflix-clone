import React from "react";
import styled from "styled-components";
const MovieCard = (props) => {
  const { img } = props;
  return (
    <div>
      <div>
        <img style={{ width: "100%", height: "100%" }} src={img} alt='' />
      </div>
      <Icons>
        <h1>helo</h1>
      </Icons>
    </div>
  );
};

export default MovieCard;

const Icons = styled.div`
  &:before {
    content: "";
    background-color: pink;
  }
`;