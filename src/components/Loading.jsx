import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "../App.jsx";

const Loading = () => {
  return (
    <div align="center">
      <div className="spinner">
        <GridLoader size={30} color="blue" timeout={3000} />
      </div>
    </div>
  );
};

export default Loading;
