import "../Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-image" src="src/assets/concertbanner.jpg" />
      <div className="header-text">
        <h2>Upcoming Gigs</h2>
      </div>
    </div>
  );
};

export default Banner;
