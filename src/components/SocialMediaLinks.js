import { socials } from "../data";
import SocialLink from "./SocialLink";

const SocialMediaLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socials.map((social) => {
        return (
          <SocialLink key={social.id} {...social} itemClass={childClass} />
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
