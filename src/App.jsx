import Gig from "./components/Gig";
import Banner from "./components/Banner";
import React, { useState, useEffect, CSSProperties } from "react";
import Loading from "./components/Loading";
import FavouriteButton from "./components/Favourite";
import "./App.css";

function App() {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `https://makers-gig-backend.onrender.com/events`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setGigs(data))
      .then(() => setLoading(false));
  }, []);

  const sortGigs = () => {
    const sortedGigs = [...gigs];
    sortedGigs.sort((a, b) => (b.favourited ? 1 : -1));
    return sortedGigs;
  };

  const toggleFavourite = (event_id) => {
    const updatedGigs = gigs.map((gig) =>
      gig.event_id === event_id ? { ...gig, favourited: !gig.favourited } : gig
    );
    setGigs(updatedGigs);
  };

  return (
    <div>
      <Banner />
      <div className="listings">
        {loading === true ? (
          <Loading />
        ) : (
          sortGigs().map((gig) => (
            <div key={gig.event_id} className="gig-item">
              <Gig
                band={gig.band_name}
                image={gig.image_url}
                description={gig.description}
                timedate={gig.time}
                location={gig.location}
              />
              <FavouriteButton
                favourited={gig.favourited}
                onToggleFavourite={() => toggleFavourite(gig.event_id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

// function App() {
//     const [count1, setCount1] = useState(0);
//     const [isFavourited1, setIsFavourited1] = useState(false);

//     const [count2, setCount2] = useState(0);
//     const [isFavourited2, setIsFavourited2] = useState(false);

//     const sortGigs = () => {
//       const sortedGigs = [
//         {
//           band: "The Wiggles",
//           description: "Party like you're a kid again",
//           timedate: "3pm 27 September 2024",
//           location: "O2",
//           image: wigglesimage,
//           count: count1,
//           setCount: setCount1,
//           isFavourited: isFavourited1,
//           setIsFavourited: setIsFavourited1,
//         },
//         {
//           band: "Red Hot Chili Peppers",
//           description: "Party like it's 1999",
//           timedate: "7.30pm 24 Dec 2024",
//           location: "O2",
//           image: rhcpimage,
//           count: count2,
//           setCount: setCount2,
//           isFavourited: isFavourited2,
//           setIsFavourited: setIsFavourited2,
//         },
//       ].sort((a, b) => (b.isFavourited ? 1 : -1));

//       return sortedGigs.map((gig, index) => <Gig key={index} {...gig} />);
//     };

//     return (
//       <div className="app">
//         <h1>Gigs</h1>
//         {sortGigs()}
//       </div>
//     );
//   }

//   export default App;
