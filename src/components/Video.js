import React from "react";
import ReactPlayer from "react-player/youtube";
import "../styles/video.css";
// Only loads the YouTube player

const Video = (props) => {
  const { vediokey, height, width } = props;
  const url = vediokey ? vediokey : "Tfmr8pPy_1M";
  const widthvideo = width ? width : "100%";
  const heightvideo = height ? height : "800px";

  console.log(url);
  return (
    <div>
      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${url}`}
        onReady={() => console.log('onReady Callback')}
        onStart={() => console.log('onStart Callback')}
        onPause={() => console.log('onPause Callback')}
        onEnded={() => console.log('onEnded Callback')}
        onError={() => console.log('onError Callback')}
        width={widthvideo}
        height={heightvideo}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};

export default Video;
