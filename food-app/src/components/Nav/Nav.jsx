import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/menu/create">Create Menu</Link>
      <Link to="/menu/update">Update Menu</Link>
    </div>
  );
};
export default Nav;
