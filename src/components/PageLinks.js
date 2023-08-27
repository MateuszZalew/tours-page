import { pageLinks } from "../data";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, name } = link;
        return (
          <li key={id}>
            <a href={href} className={childClass}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
