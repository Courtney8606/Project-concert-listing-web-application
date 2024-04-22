import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig.jsx";

test("renders with the correct Gig ", () => {
  // Setup - rendering the component on the page
  render(
    <Gig
      band="Mariah Carey"
      image="../src/assets/rhcp.webp"
      description="Wait for those high notes!"
      timedate="9.00pm 30 September 2024"
      location="Location: London"
    />
  );

  // Assert
  const bandElement = screen.getByText("Mariah Carey");
  const imageElement = screen.getByAltText("Gig Image");
  const descriptionElement = screen.getByText("Wait for those high notes!");
  const timedateElement = screen.getByText("9.00pm 30 September 2024");
  const locationElement = screen.getByText("Location: London");

  expect(bandElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(timedateElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
});
