import logo from "../images/logo.svg";
import { pageLinks, socials } from "../data";
import PageLink from "./PageLink";
import SocialMediaLink from "./SocialMediaLink";

const Navbar = () => {
  const navLinks = pageLinks.map((page) => <PageLink {...page} />);

  const socialMediaLinks = socials.map((social) => (
    <SocialMediaLink {...social} />
  ));

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {navLinks}
        </ul>

        <ul className="nav-icons">{socialMediaLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
