import React from "react";
import rhcpimage from "../../src/assets/rhcp.webp";
import "../Gig.css";

const Gig = () => {
    return (
        <div id="gig">
            <h3 class="gig-band">Red Hot Chili Peppers</h3>
            <img class="gig-image" src={rhcpimage} style={{ maxWidth: "400px", height: "auto" }}/>
            <p class="gig-description">Get ready to party like it's 1999</p>
            <p class="gig-timedate">7.30pm 24 December 2024</p>
            <p class="gig-location">Location: Mars</p>
        </div>
    )
}

export default Gig;