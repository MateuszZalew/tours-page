import PageLinks from "./PageLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />
      <SocialMediaLinks parentClass="footer-icons" childClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{currentYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
