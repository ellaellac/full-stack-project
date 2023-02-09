import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">Menu App</h1>
        <Link to="/menu">
          <Button btnTitle="View Menu" className="home__button" />
        </Link>

        <Link to="/menu/create">
          <Button btnTitle="Create Menu" className="home__button" />
        </Link>

        <Link to="/menu/update">
          <Button btnTitle="Update Menu" className="home__button" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
