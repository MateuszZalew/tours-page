import { socials } from "../data";

const SocialMediaLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socials.map((social) => {
        const { id, href, name } = social;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={childClass}
              rel="noreferrer"
            >
              <i className={`fab fa-${name}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
