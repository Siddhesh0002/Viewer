import { Typography } from "antd";
import React from "react";
import FormComponent from "../Components/FormComponent/FormComponent";

/* eslint-disable no-template-curly-in-string */

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <img
          src="top.svg"
          alt="top"
          style={{ width: "60%", marginLeft: 100, marginTop: 100 }}
        />
        <img
          src="bottom.svg"
          alt="bottom"
          style={{ width: "100%", marginTop: 100 }}
        />
      </div>
      <div className="right">
        <Typography className="heading">Welcome</Typography>
        <FormComponent />
      </div>
    </div>
  );
};

export default Home;
