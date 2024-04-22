import React, { useState } from "react";

const FavouriteButton = (props) => {
  const [heartColor, setHeartColor] = useState("grey");

  const toggleFavourite = () => {
    if (heartColor === "grey") {
      setHeartColor("#ff6666");
    } else {
      setHeartColor("grey");
    }
  };

  return (
    <div>
      <button
        className="favourite"
        onClick={() => {
          toggleFavourite();
          props.onToggleFavourite();
        }}
      >
        <i className="fa fa-heart" style={{ color: heartColor }}></i>
        {props.favourited ? "" : ""}
      </button>
    </div>
  );
};

export default FavouriteButton;
