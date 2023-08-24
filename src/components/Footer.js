import { pageLinks, socials } from "../data";
import PageLink from "./PageLink";
import SocialMediaLink from "./SocialMediaLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = pageLinks.map((page) => <PageLink {...page} />);

  const socialMediaLinks = socials.map((social) => (
    <SocialMediaLink {...social} />
  ));
  return (
    <footer className="section footer">
      <ul className="footer-links">{navLinks}</ul>
      <ul className="footer-icons">{socialMediaLinks}</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{currentYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
