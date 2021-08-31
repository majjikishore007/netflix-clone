import React, { useState } from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import Navbar from "./Navbar";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='sweet-loading'>
        <SyncLoader
          size={16}
          margin={5}
          loading={true}
          color={"#E21717"}
          css={override}
        ></SyncLoader>
      </div>
    </>
  );
};

export default Spinner;
