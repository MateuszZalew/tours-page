import { pageLinks, socials } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = pageLinks.map((page) => (
    <li key={page.id}>
      <a href={page.href} className="footer-link">
        {page.name}
      </a>
    </li>
  ));

  const socialMediaLinks = socials.map((social) => (
    <li key={social.id}>
      <a
        href={social.href}
        target="_blank"
        className="nav-icon"
        rel="noreferrer"
      >
        <i className={`fab fa-${social.name}`}></i>
      </a>
    </li>
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
