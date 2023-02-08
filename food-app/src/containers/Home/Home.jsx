import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/menu"> View Menu </Link>
      <Link to="/menu/create"> Create Menu</Link>
      <Link to="/menu/update/:id"> Update Menu</Link>
    </div>
  );
};

export default Home;
