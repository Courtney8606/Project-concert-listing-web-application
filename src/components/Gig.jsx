import "../Gig.css";
import React, { useState } from "react";

const Gig = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count % 2 === 0 ? count + 1 : count - 1);
  };

  const dateFormat = (timedate) => {
    const newdate = new Date(timedate);
    return newdate.toUTCString();
  };

  return (
    <div id="gig">
      <h3 className="gig-band">{props.band}</h3>
      {props.image ? (
        <img
          className="gig-image"
          src={props.image}
          style={{ maxWidth: "400px", height: "auto" }}
          alt="Gig Image"
        />
      ) : (
        <img
          className="gig-image"
          src="https://assets-global.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce0f7c_how-to-start-a-band-and-get-booked-header.jpeg"
          style={{ maxWidth: "400px", height: "auto" }}
          alt="Default Gig Image"
        />
      )}
      <p className="gig-description">{props.description}</p>
      <p className="gig-timedate">{dateFormat(props.timedate)}</p>
      <p className="gig-location">{props.location}</p>
      <button className="btn" onClick={handleClick}>
        <i className="fa fa-thumbs-up"></i>
        {count}
      </button>
    </div>
  );
};

export default Gig;
