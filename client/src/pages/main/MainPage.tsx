import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="pt-[100rem]">
      <h1>MainPage</h1>
      <div>
        <Link to="/gallery">Gallery</Link>
        <Link to="/certificates">Certificates</Link>
      </div>

      <div className="flex flex-col gap-[100rem]">
        <div id="about">
          <h2>About</h2>
        </div>
        <div id="reviews">
          <h2>Reviews</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
