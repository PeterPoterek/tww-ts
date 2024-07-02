import { Link } from "react-router-dom";

const MainPage = () => {
  //
  return (
    <div>
      <h1>MainPage</h1>
      <div>
        <Link to="/gallery">Gallery</Link>
        <Link to="/certificates">Certificates</Link>
      </div>
    </div>
  );
};

export default MainPage;
