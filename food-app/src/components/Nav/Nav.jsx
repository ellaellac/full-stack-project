import "./Nav.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import homeLogo from "../../pictures/homeLogo.svg";
import viewLogo from "../../pictures/view.svg";
import createLogo from "../../pictures/create.svg";
import updateLogo from "../../pictures/update.svg";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__link" to="/">
        <Logo src={homeLogo} alt="Home Logo" text="Home" />
      </Link>
      <Link className="nav__link" to="/menu">
        <Logo src={viewLogo} alt="View Menu Logo" text="View" />
      </Link>
      <Link className="nav__link" to="/menu/create">
        <Logo src={createLogo} alt="Create Logo" text="Create" />
      </Link>
      <Link className="nav__link" to="/menu/update">
        <Logo src={updateLogo} alt="update Logo" text="Update" />
      </Link>
    </div>
  );
};
export default Nav;
