import Logo from "../assets/images/logo.svg";
import MenuIconClose from "../assets/images/icon-menu-close.svg";
import MenuIcon from "../assets/images/icon-menu.svg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="News logo" />
        <input type="checkbox" id="hamburger" />
        <label htmlFor="hamburger">
          <img className="open" src={MenuIcon} alt="Close icon" />
          <img className="close" src={MenuIconClose} alt="Close icon" />
        </label>
        <div className="side-navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
        <div className="overlay"></div>
      </nav>
    </header>
  );
}
