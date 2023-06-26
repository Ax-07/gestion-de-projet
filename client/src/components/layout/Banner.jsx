import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <nav>
        <ul className="flex-row">
          <Link to="/">Home</Link>
          <Link to="/page-2">Page 2</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
