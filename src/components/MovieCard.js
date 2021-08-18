import React from "react";

const MovieCard = (props) => {
  const { img } = props;
  return (
    <div>
      <div>
        <img style={{ width: "100%", height: "100%" }} src={img} alt='' />
      </div>
    </div>
  );
};

export default MovieCard;
